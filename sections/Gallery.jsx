'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';

import '../styles/globals.css';
import { gallery } from '../constants';

import styles from '../styles';

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const Gallery = () =>  {
  const swiperRef = useRef(null);
  const [options, setOptions] = useState({ slidesPerView: 3 });
  const [width] = useWindowSize();

  useEffect(() => {
    if (width <= 768) {
      setOptions({ slidesPerView: 1 });
    } else if (width <= 1024) {
      setOptions({ slidesPerView: 2 });
    } else {
      setOptions({ slidesPerView: 3 });
    }
  }, [width]);

  return (
    <section id='Gallery' className={`${styles.yPaddings}`}>
      <div className={`${styles.innerWidth} mx-auto`}>
        <div className='lg:flex justify-between w-full'>
          <h1 className={`${styles.heading2} lg:pl-32 px-16 lg:px-0 text-center sm:text-left`}>My Gallery</h1>

          <div className='hidden lg:block mt-24 mr-24 w-[363px] h-[50px]'>
            <img src="/grunge-bg.jpg" alt="blue grunge background" className='object-cover w-full h-full rounded-full object-center drop-shadow'/>
          </div>
        </div>

        <div className='px-16 lg:px-0 mt-8 lg:mt-16 flex items-center justify-between lg:w-[90%]'>
          <p className={`${styles.paragraph} lg:w-[639px] lg:ml-56 text-center`}>I wanted to tell a story on the street. And while often in magazines the act of walking is portrayed in a stereotyped and frankly boring way, this is where looking to the future is for me, this is where the future is for me.</p>

          <div className='hidden lg:flex items-center gap-5 h-[70px]'>
            <motion.img 
              src="/previous-arrow.png" 
              alt="left arrow" 
              className="w-[70px] h-[70px] object-contain cursor-pointer" 
              onClick={() => swiperRef.current.swiper.slidePrev()}
              whileHover={{ scale: 1.1, }}
              transition={{ duration: 0.2 }}
            />
            <motion.img 
              src="/next-arrow.png" 
              alt="left arrow" 
              className="w-[70px] h-[70px] object-contain cursor-pointer" 
              onClick={() => swiperRef.current.swiper.slideNext()}
              whileHover={{ scale: 1.1, }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </div>

        {/* Insert slider for photos */}
        <>
          <Swiper
            ref={swiperRef}
            {...options}
            spaceBetween={20}
            loop={true}
            className="mySwiper mt-10 lg:mt-16 px-6 lg:px-0"
          >
            {gallery.map((photo) => (
              <SwiperSlide key={photo.id} className='border-[7px] border-blue-clr relative'>
                <img src={photo.bwImg} alt="a photo taken by Hank Stanford in black and white" className='hidden lg:block w-full h-full object-cover absolute'/>
                <motion.img src={photo.clrImg} alt="a photo taken by Hank Stanford with colors" className='w-full h-full object-cover absolute lg:opacity-0 opacity-1'
                whileHover={{opacity: 1,}}
                transition={{duration: 0.5}}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </>

        <div className='flex justify-center items-center gap-2 h-[70px] mt-2 lg:hidden'>
            <motion.img 
              src="/previous-arrow.png" 
              alt="left arrow" 
              className="w-[40px] h-[40px] object-contain cursor-pointer" 
              onClick={() => swiperRef.current.swiper.slidePrev()}
              whileHover={{ scale: 1.1, }}
              transition={{ duration: 0.2 }}
            />
            <motion.img 
              src="/next-arrow.png" 
              alt="left arrow" 
              className="w-[40px] h-[40px] object-contain cursor-pointer" 
              onClick={() => swiperRef.current.swiper.slideNext()}
              whileHover={{ scale: 1.1, }}
              transition={{ duration: 0.2 }}
            />
        </div>
      </div>
    </section>
  )
}

export default Gallery