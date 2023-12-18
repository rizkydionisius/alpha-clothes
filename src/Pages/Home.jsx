import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Review from '../Components/Review/Review';
import Footer from '../Components/Footer/Footer';
import { FaWhatsapp } from 'react-icons/fa';
import axios from 'axios';

const Home = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    console.log('token:', token);

    if (token) {
      axios
        .get('http://localhost:3001/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error.message);
        });
    }
  }, []);

  console.log('user data:', userData);

  return (
    <>
      <Navbar userData={userData} />
      <Hero />
      <Popular />
      <Review />
      <Footer />
      <div className="fixed right-5 bottom-5 p-2 rounded-full bg-[#32B947]">
        <a href="https://wa.me/6285713389415" target="blank">
          <FaWhatsapp size={35} color="white" />
        </a>
      </div>
    </>
  );
};

export default Home;
