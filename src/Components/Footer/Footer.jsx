import React from 'react';
import brand_logo from '../Assets/brand_logo.webp';

const Footer = () => {
  return (
    <footer className="p-4 bg-slate-100 sm:p-6 dark:bg-slate-800 mt-20">
      <div className="mx-auto max-w-screen-xl pt-10">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 w-64">
            <a href="/" className="flex flex-col gap-6 items-center">
              <img src={brand_logo} className="w-52" alt="FlowBite Logo" />
              <span className='text-slate-700'>Kaos Seragam & Merchandise Specialis Pembuatan Clothing & Merchandise</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-md font-semibold text-slate-900 uppercase dark:text-white">
                Company
              </h2>
              <ul className="text-slate-600 dark:text-slate-400">
                <li className="mb-4">
                  <a href="/about" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="/product" className="hover:underline">
                    Product
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-md font-semibold text-slate-900 uppercase dark:text-white">
                Hubungi Kami
              </h2>
              <ul className="text-slate-600 dark:text-slate-400">
                <li className="mb-4">
                  <a href="https://maps.app.goo.gl/1Unt4HbobBaCbJR78" className="hover:underline ">
                    Lokasi
                  </a>
                </li>
                <li className="mb-5">
                  <a href="https://www.instagram.com/alphaclothesyk/" className="hover:underline ">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-slate-200 sm:mx-auto dark:border-slate-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between mt-2">
          <span className="text-sm text-slate-500 sm:text-center dark:text-slate-400">
            © 2023 <button className="hover:underline">Alphaclothes™</button>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
