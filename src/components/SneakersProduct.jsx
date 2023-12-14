import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import "../style/product.css";
import {useNavigate} from "react-router-dom";

import {ProductSwiper} from "./snekers-product-swiper"
import { Link } from "react-router-dom";
import { Delivery } from "./Delivery";
import { share } from "./share";
import { gsap } from "gsap";
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../store/types'

export default function SneakersProduct() {
  const dispatch = useDispatch()
  const history = useNavigate();
  const { url } = useParams();

  const [product, SetProduct] = useState(getValue);
  console.log(product)
  const [Price, SetPrice] = useState({lenght:  product.price, wrapper: 0});
  const [color, SetColor] = useState(product["default-color"] | '');
  const [size, Setsize] = useState(product["default-size"] | '');
  const oneItemPrice = product["oneItemPrice"]

  let [length, SetLength] = useState(product["default-length"] | '');
  let [wrapper, SetWrapper] = useState(product["default-wrapper"] | '');
  const [Isliked, SetIsLiked] = useState(false);

  function Islike(url, type){

    if(type === "get"){
    const list_like = JSON.parse(localStorage.getItem("like"));
 

 
    if (list_like.includes(url)) {

      SetIsLiked(true)

    } else {

      SetIsLiked(false)
    
    }

    localStorage.setItem("like", JSON.stringify(list_like));

 
   }
   else{
    
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
    Islike(url,'get')
    gsap.from(`#like-${url} `, {

  
      duration: 2,
      scale: 0.5, 
      opacity: 0.3, 
       
      stagger: 0.1,
      ease: "elastic", 
      force3D: true
        
    
    
      });
      

   }
  }

  function randomArrays() {
    const data = Array(10).fill().map(() => Math.floor(require('../sneakers.json').goods.length * Math.random())).sort(function(a, b) {return a - b; })
    let arr = []
    for (let i = 0; i < data.length; i++) {
          arr.push(require('../sneakers.json').goods.filter(el => el.Id === data[i]))
        }
    
      return arr
    

  }

  function getValue() {


    return require('../sneakers.json').goods.find((el) => el["unique_code"] === url)
  }

  // user language
  //console.log(navigator.language);

  //console.log(navigator.geolocation); oneItemPrice

  function shareProduct() {
    share({
      title: `Привет, посмотри на ${product["title"]}`,
      text: `Привет, посмотри на ${product["title"]}`,
      link: `https://flower-lover.netlify.app/product/${product["unique_code"]}`,
      img:  `/flor2/${product.Id}.png`
    }
 
     )
 
  }


  var Visible = function (target) {
    try{
      if(target){
       
    
    var small = document.querySelector(".price-small");
    // Все позиции элемента
    var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
      },
      // Получаем позиции окна
      windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight,
      };

    if (
      targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
      targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
      targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
      targetPosition.left < windowPosition.right
    ) {
      // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
      // Если элемент полностью видно, то запускаем следующий код

      small.style.display = "none";
    } else {
      // Если элемент не видно, то запускаем этот код
      small.style.display = "grid";
    }
  }}
  catch(err){
    
  }
  };
  const path = useSelector(
    state => state.PathReducer
  )


  useEffect(() => {
  
    // При перерисовке страницы, вызываем функцию для скрола вверх
    window.scrollTo(0, 0);
    SetProduct(getValue)
    Islike(url, 'get')

 


 


    var element = document.querySelector(".sell-info");
   
    if(element){
    window.addEventListener("scroll", () => {
      Visible(element);
    });
  }
   


  },[url]);



  useEffect(() => {
    dispatch({
      type: types.PATH_ADD,
      payload: {'path': `/product/${product["unique-url"]}`, 'title': product["title"]}
    })
   
  }, []);

  // А также запустим функцию сразу. А то вдруг, элемент изначально видно

  return (
    <>
      {/* <div className="path">
    {path.path ?(
    path.path.map((el)=>{
      return (
        <>
          <Link to={el.path}>
        <div className="el">
          
          {el.title } <div className=""> {'>'} </div>
        </div>
        </Link>
        </>
      )
    }) ) :
    (<></>)
  
  }
  </div> */}
    <div className="arrow-back" onClick={()=>{history(-1)}}>
                <img src={require('../static-img/svg/arrow-narrow-circle-broken-left-svgrepo-com.svg').default} alt="" />
            </div>
      <div className="price-small">
        <div className="buy">
          <div className="buy-now">Купить сейчас </div>
          <div className="discount-price">
          {Math.round(((Price.lenght +   Price.wrapper) ) / 10) * 10} <span>&#x20bd; </span>
          </div>
        </div>
        <div className="add-to-basket">В корзину</div>
        <div
          className="like-small"
          onClick={(el) => {
            Islike(url,'change')
          }}
        >
          {Isliked ? (
  <svg viewBox="0 0 24.00 24.00" fill="none" id={`like-${url}`} xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.8160000000000001" />

              <g id="SVGRepo_iconCarrier">
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                  stroke="rgb(179, 178, 178)"
                  stroke-width="1.1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="#FF0707"
                />{" "}
              </g>
            </svg>
          ) : ( 
             <svg viewBox="0 0 24.00 24.00" fill="none" id={`like-${url}`} xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.8160000000000001" />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                  stroke="#B3B2B2"
                  stroke-width="1.224"
                  fill="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
              </g>
            </svg>
          )}
        </div>
      </div>

      <div className="product">
        <div className="product-img">
          <ProductSwiper img={product['unique_code']} />
        </div>
        <div className="info">
          <div className="title">{product.title}</div>

     
          <div className="sell-info">
            <div className="line-1">
          <div className="price-big">
            <div className="price-info">
              <div className="discount-price">
              {Math.round(((Price.lenght +   Price.wrapper) ) / 10) * 10} <span>&#x20bd; </span>{" "}
              </div>
              <div className="real-price">
                <div className="price">
                  {Math.round(((Price.lenght +   Price.wrapper) * 1.2) / 10) * 10} <span>&#x20bd; </span>{" "}
                </div>{" "}
                <div className="percent">-20%</div>
              </div>
            </div>
            </div>
            <div className="container">
            {/* <div className="share">
              <div
                className="share-button"
                onClick={(el) => {
                  shareProduct();
                }}
              >
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 13V17.5C20 20.5577 16 20.5 12 20.5C8 20.5 4 20.5577 4 17.5V13M12 3L12 15M12 3L16 7M12 3L8 7"
                    stroke="#000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
   
            </div> */}
            <div className="bonuses">
              Вернем      {Math.round(((Price.lenght +   Price.wrapper) * 0.11) / 1) * 1} баллами <div className="icon">
                <img src={require("../static-img/svg/coin-vector-svgrepo-com (1).svg").default} alt="" srcset="" />
              </div>
            </div>


            </div>
            </div>
            <div className="line-2">
            <div className="buttons">
          
        <div className="add-to-basket">В корзину</div>
        <div
          className="like-small"
          onClick={(el) => {
            Islike(url,'change')
          }}
        >
          {Isliked ? (
  <svg viewBox="0 0 24.00 24.00" fill="none" id={`like-${url}`} xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.8160000000000001" />

              <g id="SVGRepo_iconCarrier">
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                  stroke="rgb(179, 178, 178)"
                  stroke-width="1.1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="#FF0707"
                />{" "}
              </g>
            </svg>
          ) : ( 
             <svg viewBox="0 0 24.00 24.00" fill="none" id={`like-${url}`} xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.8160000000000001" />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                  stroke="#B3B2B2"
                  stroke-width="1.224"
                  fill="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
              </g>
            </svg>
          )}
        </div>
        </div>
        </div>
         
          </div>
          <Delivery />
          {/* <div className="alike">
            <div className="title">Вам может понравиться</div>
            <div className="img">
              {randomArrays().map((els, key) => (
                <Link to={`/product/${els["unique-url"]}`}>
                  <div key={key} className="alike-img">
                    <img src={require(`../static-img/${els.unique_code}/1.jpg`)} alt="" />
                    <div className="cart">
                      <div className="stars">
                        <svg xmlns="http://www.w3.org/2000/svg" width="130" height="18" viewBox="0 0 101 16" fill="none">
                          <path
                            d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                            fill="#FFC803"
                          />
                          <path
                            d="M29.12 0L30.9161 5.52786H36.7284L32.0262 8.94427L33.8223 14.4721L29.12 11.0557L24.4177 14.4721L26.2138 8.94427L21.5115 5.52786H27.3239L29.12 0Z"
                            fill="#FFC803"
                          />
                          <path
                            d="M50.24 0L52.0361 5.52786H57.8484L53.1462 8.94427L54.9423 14.4721L50.24 11.0557L45.5377 14.4721L47.3338 8.94427L42.6315 5.52786H48.4439L50.24 0Z"
                            fill="#FFC803"
                          />
                          <path
                            d="M71.36 0L73.1561 5.52786H78.9684L74.2662 8.94427L76.0623 14.4721L71.36 11.0557L66.6577 14.4721L68.4538 8.94427L63.7515 5.52786H69.5639L71.36 0Z"
                            fill="#FFC803"
                          />
                          <path
                            d="M92.48 0L94.2761 5.52786H100.088L95.3862 8.94427L97.1823 14.4721L92.48 11.0557L87.7777 14.4721L89.5738 8.94427L84.8716 5.52786H90.6839L92.48 0Z"
                            fill="#FFC803"
                          />
                        </svg>
                      </div>
                      <div className="title">
                        <p>{els.title}</p>
                      </div>
                      <div className="price">
                        {els.price} <span>&#x20bd; </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}