import React from "react";
import { Carousel } from "flowbite-react";
import banner_alpha from "../Assets/gambar-fix/banner-alpha.png";
import banner_korsa from "../Assets/gambar-fix/banner-korsa.png";
import banner_totebag from "../Assets/gambar-fix/banner-totebag.png";

const Hero = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 min-h-[90vh] z-10">
      <Carousel>
        <img src={banner_alpha} alt="Banner Alpha" />
        <img src={banner_korsa} alt="Banner Korsa" />
        <img src={banner_totebag} alt="Banner Totebag" />
      </Carousel>
    </div>
  );
};

export default Hero;
