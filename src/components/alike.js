import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination } from 'swiper/modules';

export function Alike() {
    const img = [1, 2,3 ,4,5,6,7,8,9,10,11,12,13,14,15,16]
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={50}
       
        modules={[Pagination]}
        className=""
      >
 {img.map((img) => (
        <>
        <SwiperSlide className='alike-img'>
            <img src={require(`../static-img/flor2/${img}.png`)} alt="" />
        </SwiperSlide>  

        </>
        ))}
      </Swiper>
    </>
  );
}
