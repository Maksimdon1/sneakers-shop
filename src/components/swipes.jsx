import React, {  } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles.css';

// import required modules
import { Autoplay} from 'swiper/modules';


// import required modules
export  function Swipers(props) {

  return (
    <>

      <Swiper

        centeredSlides={true}
        autoplay={{
          delay: props.delay,
    
        }}

        
       
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={require('../static-img/swiper_1.jpg')} alt="" /></SwiperSlide>  
        <SwiperSlide> <img src={require('../static-img/swiper_2.jpg')} alt="" /></SwiperSlide>  
        <SwiperSlide> <img src={require('../static-img/swiper_3.jpg')} alt="" /></SwiperSlide> 
        <SwiperSlide> <img src={require('../static-img/hello-img.png')} alt="" /></SwiperSlide>

      </Swiper>

    </>
  );
}
