
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
  const imgs = [props.img][0]
    console.log(imgs)

  return (
    <>

      <Swiper
      pagination={{
        dynamicBullets: true,
      }}
   
      
      modules={[Pagination]}
        className="mSwiper"
      >  {imgs.map((img) => (
        <>
        <SwiperSlide>     <div className='img'  style={{'backgroundImage':`../static-img/img/${img}/1.jpg`}}></div></SwiperSlide>  

        </>
        ))}
      </Swiper>

    </>
  );
}
