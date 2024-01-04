
import { useState, useEffect } from "react";
import "../../style/katalog.scss";
import { Link } from "react-router-dom";
import { InfoComponents } from "../infoComponents.jsx";
import {useNavigate} from "react-router-dom";
import { gsap } from "gsap";
import { ProductSwiper } from "../snekers-product-swiper";
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../../store/types'
import Swipers from "../KatalogSwiper";

export default function Table() {
 
  const [sneakers, SetSneakers] = useState(data)
  const [pageYOffset, SetpageYOffset] = useState(localStorage.getItem('pageYOffset'))
  const [ShowBottomPanel, SetShowBottomPanel] = useState(false)
  const [ShowBottomPanelData, SetShowBottomPanelData] = useState()



 const dispatch = useDispatch()
  const path = useSelector(
    state => state.PathReducer
  )
  // if(pageYOffset){
  //   window.scrollTo({ top: pageYOffset});
  // }
  // useEffect(() => {



    
  //   window.scrollTo({ top: pageYOffset});
  // }, [pageYOffset]);





 useEffect(() => {
  SetSneakers(data)

  // При перерисовке страницы, вызываем функцию для скрола вверх
 // window.scrollTo(0, 0);

 
},[]);



function voidBottomPanel(props){
  if(!ShowBottomPanel){
    
  document.body.style.overflow = "hidden";
  }
  else{

    document.body.style.overflow = "auto";
  }
  SetShowBottomPanel(!ShowBottomPanel)
  SetShowBottomPanelData(props)

}

 function data() {
  if(JSON.parse(localStorage.getItem("like")) == null){
    localStorage.setItem("like", JSON.stringify([]));
  }

  let arr = [];

  const liked = JSON.parse(localStorage.getItem("like"));


require('../../sneakers.json').goods.forEach((element) => {
    if(liked.includes(element['unique_code'])){
      element.like = true
    }
    else{
   element.like = false;
  }
   arr.push(element);
  });

  return arr;

 }






















 function add_To_Like(id) {
  console.log(sneakers)
  console.log(id)

  
  // localStorage.setItem('like',JSON.stringify([]) )

  function addToLocal(url) {
   const list_like = JSON.parse(localStorage.getItem("like"));
   if (list_like == null) {
    localStorage.setItem("like", JSON.stringify([]));
    list_like = JSON.parse(localStorage.getItem("like"));
   }

   if (list_like.includes(url)) {
    list_like.splice(list_like.indexOf(url), 1);
   } else {
    list_like.push(url);
   }

   localStorage.setItem("like", JSON.stringify(list_like));

  }

  let arr = sneakers;

   arr.map((el) => {
   if (el.unique_code === id) {
    el.like = !el.like;
    addToLocal(el["unique_code"]);
    gsap.from(`#like-${el.Id} `, {

  
      duration: 2,
      scale: 0.5, 
      opacity: 0.3, 
       
      stagger: 0.1,
      ease: "elastic", 
      force3D: true
        
    
    
      });
   }
   return el;
  });
  console.log(id)






    SetSneakers(data)
 }

 













 const showImage = () => {
  document.getElementById("katalog-all").style.display = "grid"
 };
 const change = (id) => {
  const el = document.getElementById(id);
  el.style.display = "flex";
 };

 return (
  <>
 

    <div
     className={"katalog-all-table"}
     id="katalog-all"
     onLoad={(el) => {
      showImage();
     }}
    >

     {sneakers.slice(0,50).map((img, key) => (
      <>
      <Link to={`/product/sneakers/${img["unique_code"]}`} >
       <div
        key={key}
        className="item"
        id={img.Id}
        onLoad={() => {
         change(img.Id);
        }}
       >
                <div
         className="like"
         onClick={(el) => {
          el.preventDefault();
          add_To_Like(img['unique_code']);
         }}
        >
         {img.like ? (
          <svg viewBox="0 0 24.00 24.00" fill="none" id={`like-${img.Id}`} xmlns="http://www.w3.org/2000/svg">
           <g id="SVGRepo_bgCarrier" stroke-width="0" />

           <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.8160000000000001" />

           <g id="SVGRepo_iconCarrier">
            <path
             xmlns="http://www.w3.org/2000/svg"
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
             stroke="#E94E77"
             stroke-width="1.1"
             stroke-linecap="round"
             stroke-linejoin="round"
             fill="#FF0707"
            />{" "}
           </g>
          </svg>
         ) : (
           <svg viewBox="0 0 24.00 24.00" fill="none" id={`like-${img.Id}`} xmlns="http://www.w3.org/2000/svg">
           <g id="SVGRepo_bgCarrier" stroke-width="0" />

           <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.8160000000000001" />

           <g id="SVGRepo_iconCarrier">
            {" "}
            <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
             stroke="#B3B2B2"
             stroke-width="2.4"
             fill="#fff"
             stroke-linecap="round"
             stroke-linejoin="round"
            />{" "}
           </g>
          </svg>
         )}
        </div>
       <Swipers img={[img.unique_code, img.unique_code]} />
       

      

        <div className="card"
        //  onClick={()=>{    localStorage.setItem("pageYOffset", window.pageYOffset)  }}
         >

      
           <div className="price">
                <div className="show-price">{img.price} ₽</div>
                 <div className="real-price">

                     {img.price * 1.2} <span>&#x20bd; </span>

                                 
                 </div>
             </div>
             <div className="title"><p>{img.title}</p></div>
             <div className="delivery-date long" onClick={(el) => {
       el.preventDefault();
       voidBottomPanel({title: 'Доставка на выбранный адрес', description:'Выбрать адрес можно в профиле ', url: '/user/info?show=delivery-ddresses'})
 
      }} >
               сегодня, от 3 часов
             </div>
        </div>
    
       </div>
      </Link>
     </>
     ))}
  </div>
  </>

 );
}
