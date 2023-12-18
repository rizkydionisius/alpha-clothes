import React, { useState } from 'react';
import logo from '../Assets/logo.png';

import { Link, useNavigate } from 'react-router-dom';
import { showSuccessToast } from '../../Helper/ToastHelper';

const Navbar = ({ userData }) => {
  const navigate = useNavigate();

  console.log('user data navbar:', userData);

  const [menu, setMenu] = useState('');

  const isLoggedIn = localStorage.getItem('isLoggedIn');

  console.log(isLoggedIn);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.setItem('isLoggedIn', 'false');
    console.log('Logout successful');
    showSuccessToast('Logout Berhasil');
    setTimeout(() => {
      window.location.href = '/';
    }, 2000);
  };

  return (
    <div className="flex justify-between px-20 py-4 backdrop-blur-sm text-lg shadow-lg">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => {
          navigate('/');
        }}
      >
        <img src={logo} alt="Brand Logo" />
        <p className="font-semibold text-2xl">Alpha Clothes</p>
      </div>
      <ul className="flex list-none gap-12 items-center">
        <li
          onClick={() => {
            setMenu('Home');
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/">
            Home
          </Link>{' '}
          {menu === 'Home' ? <hr className="border-2 border-slate-600 rounded-full" /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('About');
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/About">
            About
          </Link>
          {menu === 'About' ? <hr className="border-2 border-slate-600 rounded-full" /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('Product');
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/Product">
            Product
          </Link>{' '}
          {menu === 'Product' ? <hr className="border-2 border-slate-600 rounded-full" /> : <></>}
        </li>
      </ul>
      <div className="flex items-center gap-11">
        {isLoggedIn === 'true' ? (
          <div className="flex gap-5 items-center justify-center">
            <span className="text-slate-700">
              Hi, <span className="font-semibold">{userData?.fullName}</span>
            </span>
            <button
              onClick={handleLogout}
              className="px-7 py-2 outline-none border-2 rounded-lg border-slate-600 hover:scale-105 transition-all"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="px-7 py-2 outline-none border-2 rounded-lg border-slate-600 hover:scale-105 transition-all">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
