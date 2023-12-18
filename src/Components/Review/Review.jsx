import React, { useEffect, useState } from 'react';
import { CardReview } from '../Card/CardReview';
import { Modal, TextInput, Textarea } from 'flowbite-react';
import axios from 'axios';
import { showSuccessToast } from '../../Helper/ToastHelper';

const Review = () => {
  const [openModal, setOpenModal] = useState(false);

  const token = localStorage.getItem('token');
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  const [testimonials, setTestimonials] = useState([]);

  const [userRating, setUserRating] = useState('');
  const [testimonialText, setTestimonialText] = useState('');

  useEffect(() => {
    // Panggil rute backend untuk mendapatkan data testimonial
    axios
      .get('http://localhost:3001/testimonials')
      .then((response) => {
        setTestimonials(response.data);
      })
      .catch((error) => {
        console.error('Error fetching testimonials:', error.message);
      });
  }, []);

  console.log('testimonials:', testimonials);

  const handleTestimonialSubmit = async (e) => {
    e.preventDefault();

    try {
      // Kirim testimonial ke server
      await axios.post(
        'http://localhost:3001/testimonial',
        {
          rating: userRating,
          text: testimonialText,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      showSuccessToast('Review berhasil ditambahkan');
      setTestimonialText('');
      setUserRating('');
      setOpenModal(false);

      await refreshTestimonials();
    } catch (error) {
      console.error('Error submitting testimonial:', error.message);
    }
  };

  const refreshTestimonials = async () => {
    try {
      const response = await axios.get('http://localhost:3001/testimonials');
      setTestimonials(response.data);
    } catch (error) {
      console.error('Error fetching testimonials:', error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col py-16 px-28">
        <div className="text-4xl font-semibold text-center pb-10 tracking-wide text-slate-700">
          <span className="font-bold text-slate-800">Review</span> Customer
        </div>
        <div className="flex flex-wrap gap-10 justify-center">
          {testimonials.map((value, index) => (
            <CardReview key={index} name={value.user} rating={value.rating} comment={value.text} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-10 gap-5">
          {isLoggedIn === 'true' ? (
            <div
              className="px-12 py-3 rounded-xl cursor-pointer bg-[#FFD233] text-slate-800 transition-all hover:scale-105 font-semibold"
              onClick={() => setOpenModal(true)}
            >
              Berikan Review
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Berikan Review</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form onSubmit={handleTestimonialSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <span className="text-slate-600">Rating</span>
                <TextInput
                  id="rating"
                  type="number"
                  placeholder="1 - 5"
                  required
                  value={userRating}
                  onChange={(e) => setUserRating(e.target.value)}
                />
              </div>
              <div>
                <Textarea
                  id="review"
                  placeholder="Tuliskan review kamu..."
                  required
                  rows={4}
                  value={testimonialText}
                  onChange={(e) => setTestimonialText(e.target.value)}
                />
              </div>
              <div className="flex justify-end gap-3 mt-8">
                <button
                  type="submit"
                  className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-2 rounded-xl"
                >
                  Submit
                </button>
                <button
                  onClick={() => {
                    setUserRating('1 - 5');
                    setTestimonialText('');
                    setOpenModal(false);
                  }}
                  className="bg-white text-sky-500 border-sky-500 border-2 font-semibold px-5 py-2 rounded-xl"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Review;
