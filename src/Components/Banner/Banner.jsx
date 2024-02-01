import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import MyComponent from "../components/MyComponent";
import Marquee from "react-fast-marquee";
// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/z2Mp4wW/movies-avatar-1680x1050-entertainment-movies-hd-art-wallpaper-preview.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Avatar 2</h1>
      <h2 className="mb-5 text-xl"><span className='font-bold '>Directed By -  </span> James Cameron</h2>
      <h2  className="mb-5 text-xl"><span className='font-bold '>Category - </span> Science Fiction</h2>
      <h1 className='text-2xl font-bold text-green-600'><Marquee pauseOnHover>Coming Soon</Marquee></h1>
    </div>
  </div>
</div>
            </SwiperSlide>
            <SwiperSlide>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/rFd50Zd/Animal-first-look.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Animal</h1>
      <h2 className="mb-5 text-xl"><span className='font-bold '>Directed By - </span> James Cameron</h2>
      <h2  className="mb-5 text-xl"><span className='font-bold '>Category - </span> Action Drama </h2>
      <h1 className='text-2xl font-bold text-green-600'><Marquee pauseOnHover>Coming Soon</Marquee></h1>
    </div>
  </div>
</div>
            </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;