import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles.css';

// import required modules
import { Pagination } from 'swiper/modules';


// import required modules
export  function  ProductSwiper(props) {
    const img = [props.img]
    console.log(img)

  return (
    <>

      <Swiper
      pagination={{
        dynamicBullets: true,
      }}
   
      
      modules={[Pagination]}
        className="mySwiper"
      >  {img.map((img) => (
        <>
        <SwiperSlide>         <img src={require(`../static-img/img/${img}/1.jpg`)} alt="" /></SwiperSlide>  

        </>
        ))}
      </Swiper>

    </>
  );
}
