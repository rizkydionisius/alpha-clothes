import React, { useEffect, useState } from 'react';
import korsa from '../../src/Components/Assets/gambar-fix/product-korsa.png';
import kaos from '../../src/Components/Assets/gambar-fix/product-kaos.png';
import jaket from '../../src/Components/Assets/gambar-fix/product-jaket.png';
import lanyard from '../../src/Components/Assets/gambar-fix/product-lanyard.png';
import totebag from '../../src/Components/Assets/gambar-fix/product-totebag.png';
import topi from '../../src/Components/Assets/gambar-fix/product-topi.png';
import mug from '../../src/Components/Assets/gambar-fix/product-mug.png';
import ganci from '../../src/Components/Assets/gambar-fix/product-ganci.png';
import jersey from '../../src/Components/Assets/gambar-fix/product-jersey.png';
import rompi from '../../src/Components/Assets/gambar-fix/product-rompi.png';
import id_card from '../../src/Components/Assets/gambar-fix/product-idcard.png';
import hoodie from '../../src/Components/Assets/gambar-fix/product-hoodie.png';
import Footer from '../Components/Footer/Footer';
import ProductDetails from './ProductDetails';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from '../Components/Navbar/Navbar';
import axios from 'axios';

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      image: korsa,
      title: 'KORSA',
      price: '135.000 - 150.000',
      description:
        'Aksesori elegan untuk sentuhan gaya yang berkelas, memadukan fungsi dan desain yang menarik.',
    },
    {
      id: 2,
      image: kaos,
      title: 'KAOS',
      price: '60.000 - 80.000',
      description:
        'Kaos berkualitas tinggi dengan gaya modern dan kenyamanan luar biasa untuk gaya sehari-hari Anda.',
    },
    {
      id: 3,
      image: jaket,
      title: 'JAKET',
      price: '190.000 - 210.000',
      description:
        'Kaos berkualitas tinggi dengan gaya modern dan kenyamanan luar biasa untuk gaya sehari-hari Anda.',
    },
    {
      id: 4,
      image: lanyard,
      title: ' LANYARD',
      price: '15.000 - 25.000',
      description:
        'Lanyard fungsional dengan desain menarik, cocok untuk kebutuhan sehari-hari dengan gaya.',
    },
    {
      id: 5,
      image: totebag,
      title: 'TOTEBAG',
      price: '45.000 - 55.000',
      description:
        'Praktis, modis, dan tahan lama untuk menemani kegiatan sehari-hari Anda dengan gaya.',
    },
    {
      id: 6,
      image: topi,
      title: 'TOPI',
      price: '15.000 - 25.000',
      description: 'Desain trendy, nyaman dipakai, menambah kesan stylish pada penampilan Anda.',
    },
    {
      id: 7,
      image: mug,
      title: 'MUG',
      price: '25.000 - 35.000',
      description:
        'Mug berkualitas tinggi dengan desain unik, cocok untuk menemani waktu istirahat Anda.',
    },
    {
      id: 8,
      image: ganci,
      title: 'GANCI',
      price: '7.000 - 13.000',
      description:
        'Fungsional dan stylish, memudahkan penggunaan sehari-hari dengan sentuhan modern.',
    },
    {
      id: 9,
      image: jersey,
      title: 'JERSEY',
      price: '150.000 - 170.000',
      description:
        'Jersey berkualitas tinggi, nyaman dipakai, dan menampilkan gaya sporty yang keren.',
    },
    {
      id: 10,
      image: rompi,
      title: 'ROMPI',
      price: '130.000 - 150.000',
      description:
        ' Rompi fashion-forward, menambahkan lapisan gaya pada pakaian Anda sehari-hari.',
    },
    {
      id: 11,
      image: id_card,
      title: 'ID CARD',
      price: '10.000 - 15.000',
      description:
        'ID card yang fungsional dan stylish untuk keperluan identifikasi dengan desain yang menarik.',
    },
    {
      id: 12,
      image: hoodie,
      title: 'HOODIE',
      price: '155.000 - 165.000',
      description:
        'Hoodie yang nyaman, modis, dan cocok untuk gaya santai maupun aktifitas outdoor.',
    },
  ];

  const maxLength = 35;

  const truncateDescription = (text) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)} . . .` : text;
  };

  const openDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeDetails = () => {
    setSelectedProduct(null);
  };

  const proceedToWhatsApp = () => {
    // Implement logic to proceed to WhatsApp
    console.log('Proceeding to WhatsApp...');
    closeDetails();
  };

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
      <div className="flex flex-col pt-10 px-32 bg-slate-50">
        <h1 className="text-5xl font-bold text-center mb-14 tracking-wide text-slate-800 uppercase">
          Yuk Belanja
        </h1>
        <div className="grid grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-xl flex flex-col gap-4 items-center justify-center bg-white shadow-lg py-5 px-5"
            >
              <img src={product.image} alt={product.title} />
              <div className="flex items-center justify-between w-full mt-4">
                <h2 className="text-2xl font-bold text-slate-800">{product.title}</h2>
                <p className="text-md font-semibold text-slate-600">Rp {product.price}</p>
              </div>
              <p className="text-slate-500 w-full">{truncateDescription(product.description)}</p>
              <button
                onClick={() => openDetails(product)}
                className="outline-none rounded-lg font-medium text-white bg-red-700 hover:bg-red-800 w-full h-10 tracking-wider transition-all"
              >
                Lihat Detail
              </button>
            </div>
          ))}
        </div>
        {selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            onClose={closeDetails}
            onWhatsApp={proceedToWhatsApp}
          />
        )}
      </div>
      <div className="fixed right-5 bottom-5 p-2 rounded-full bg-[#32B947]">
        <a href="https://wa.me/6285713389415" target="blank">
          <FaWhatsapp size={35} color="white" />
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Product;
