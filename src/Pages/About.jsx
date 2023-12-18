import React, { useEffect, useState } from 'react';
import about_kaos from '../../src/Components/Assets/gambar-fix/about-kaos.png';
import about_lanyard from '../../src/Components/Assets/gambar-fix/about-lanyard.png';
import about_review from '../../src/Components/Assets/gambar-fix/about-review.png';
import about_korsa from '../../src/Components/Assets/gambar-fix/about-korsa.png';
import Footer from '../Components/Footer/Footer';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from '../Components/Navbar/Navbar';
import axios from 'axios';

const About = () => {
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
  return (
    <>
      <Navbar userData={userData} />
      <section className="bg-slate-50 dark:bg-slate-900 py-16">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-6 text-2xl font-bold tracking-wide md:text-2xl xl:text-4xl dark:text-white">
              Spesialis Pembuatan Clothing & Merchandise
            </h1>
            <p className="max-w-2xl mb-6 text-slate-500 lg:mb-8 md:text-lg lg:text-xl lg:leading-relaxed">
              Selamat datang di <span className="font-semibold text-slate-600">Alpha Clothes</span>,
              tempat di mana kreativitas bertemu dengan kualitas tinggi dalam pembuatan pakaian dan
              merchandise yang memukau. Sebagai spesialis dalam industri ini, kami memadukan
              keahlian teknis dengan inovasi desain untuk menghasilkan produk yang tidak hanya
              menarik secara visual tetapi juga mencerminkan jati diri merek Anda.
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={about_kaos} alt="Kaos" className="rounded-2xl shadow-xl" />
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-900 py-16">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-8 lg:py-16 lg:grid-cols-12">
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex ">
            <img src={about_lanyard} alt="Lanyard" className="rounded-2xl shadow-xl" />
          </div>
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-6 text-2xl font-bold tracking-wide md:text-2xl xl:text-4xl dark:text-white">
              Inovasi Dalam Desain
            </h1>
            <p className="max-w-2xl mb-6 text-slate-500 lg:mb-8 md:text-lg lg:text-xl lg:leading-relaxed">
              Kami menonjolkan inovasi dalam desain. Dari konsep yang menarik hingga pengaplikasian
              teknik terkini, kami bertekad untuk menciptakan pakaian yang tidak hanya
              fashion-forward tetapi juga merefleksikan karakter dan kepribadian Anda.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-slate-900 py-16">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-6 text-2xl font-bold tracking-wide md:text-2xl xl:text-4xl dark:text-white">
              Pelayanan Pelanggan yang Luar Biasa
            </h1>
            <p className="max-w-2xl mb-6 text-slate-500 lg:mb-8 md:text-lg lg:text-xl lg:leading-relaxed">
              Kami tidak hanya menjual pakaian; kami membangun hubungan. Pelayanan pelanggan yang
              prima adalah inti dari bisnis kami. Tim Alpha Clothes siap membantu Anda dengan saran
              ahli, pengaturan pesanan khusus, dan memastikan pengalaman berbelanja Anda dengan kami
              adalah yang terbaik.
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={about_review} alt="Review" className="rounded-2xl shadow-xl" />
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-900 py-16">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-8 lg:py-16 lg:grid-cols-12">
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={about_korsa} alt="Korsa" className="rounded-2xl shadow-xl" />
          </div>
          <div className="mr-auto place-self-center lg:col-span-7 ">
            <h1 className="max-w-2xl mb-6 text-2xl font-bold tracking-wide md:text-2xl xl:text-4xl dark:text-white">
              Komitmen pada Kesenian dan Kreativitas
            </h1>
            <p className="max-w-2xl mb-6 text-slate-500 lg:mb-8 md:text-lg lg:text-xl lg:leading-relaxed">
              Kami mempersembahkan koleksi yang tidak hanya mode, tetapi juga seni. Dengan mendukung
              para desainer lokal dan menggali kreativitas dalam setiap detail, Alpha Clothes
              memberikan penghormatan pada seni fashion dan karya kreatif.
            </p>
          </div>
        </div>
      </section>
      <div className="fixed right-5 bottom-5 p-2 rounded-full bg-[#32B947]">
        <a href="https://wa.me/6285713389415" target="blank">
          <FaWhatsapp size={35} color="white" />
        </a>
      </div>
      <Footer />
    </>
  );
};

export default About;
