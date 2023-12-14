import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import "../style/product.css";
import {useNavigate} from "react-router-dom";
import { ProductSwiper } from "./product-swiper";
import { Link } from "react-router-dom";
import { Delivery } from "./Delivery";
import { share } from "./share";
import { gsap } from "gsap";
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../store/types'

export default function Product() {
  const dispatch = useDispatch()
  const history = useNavigate();
  const { url } = useParams();

  const [product, SetProduct] = useState(getValue);
  const [Price, SetPrice] = useState({lenght:  product.price, wrapper: 0});
  const [color, SetColor] = useState(product["default-color"]);
  const [size, Setsize] = useState(product["default-size"]);
  const oneItemPrice = product["oneItemPrice"]

  let [length, SetLength] = useState(product["default-length"]);
  let [wrapper, SetWrapper] = useState(product["default-wrapper"]);
  const [Isliked, SetIsLiked] = useState(false);
  console.log(oneItemPrice)
  console.log(product)
  function Islike(url, type){

    if(type === "get"){
    const list_like = JSON.parse(localStorage.getItem("like"));
 
    console.log(list_like)
    console.log(url)
 
    if (list_like.includes(url)) {

      SetIsLiked(true)
      console.log(Isliked)

    } else {

      SetIsLiked(false)
    
    }
    console.log(Isliked)
 
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
   
console.log(length)
console.log(Price)

  function randomArrays() {
    const data = Array(10).fill().map(() => Math.floor(require('../flowers.json').products.length * Math.random())).sort(function(a, b) {return a - b; })
    let arr = []
    for (let i = 0; i < data.length; i++) {
          arr.push(...require('../flowers.json').products.filter(el => el.Id === data[i]))
        }
    
      return arr
    

  }

  function getValue() {
    return require("../flowers.json")["products"].find((el) => el["unique-url"] === url)
  }
  // user language
  //console.log(navigator.language);

  //console.log(navigator.geolocation); oneItemPrice

  function shareProduct() {
    share({
      title: `Привет, посмотри на ${product["title"]}`,
      text: `Привет, посмотри на ${product["title"]}`,
      link: `https://flower-lover.netlify.app/product/${product["unique-url"]}`,
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
  console.log(path)

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
      <div className="path">
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
  </div>
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
          <ProductSwiper img={product.Id} />
        </div>
        <div className="info">
          <div className="title">{product.title}</div>

          <div className="set-color" id="set">
            <div className="header">
              1. Выберите цвет букета: <h4>{color["translate-color"]}</h4>
            </div>
            <div className="colors">
              {product.colors.map((el, key) => (
                <div key={key}
                  className="color-img"
                  onClick={() => {
                    SetColor(el);
                  }}
                >
                  <img src={require(`../static-img/colors/${el.img}`)} alt="" />
                </div>
              ))}
            </div>
          </div>

          <div className="set-size" id="set">
            <div className="header">
              2. Выберите высоту цветков: <h4>{size}</h4> <h5>см</h5>
            </div>
            <div className="sizes">
              {product["available-size"].map((el, key) => (
                    <div key={key}
                  className="size"
                  onClick={() => {
                    Setsize(el);
                  }}
                >
                  {el} cm
                  {(() => {
                    if (el === 60) {
                      return (
                        <div className="fire">
                          <svg viewBox="-33 0 255 255" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                            <defs>
                              <linearGradient id="linear-gradient-1" gradientUnits="userSpaceOnUse" x1="94.141" y1="255" x2="94.141" y2="0.188">
                                <stop offset="0" stop-color="#ff4c0d" />
                                <stop offset="1" stop-color="#fc9502" />
                              </linearGradient>
                            </defs>
                            <g id="fire">
                              <path
                                d="M187.899,164.809 C185.803,214.868 144.574,254.812 94.000,254.812 C42.085,254.812 -0.000,211.312 -0.000,160.812 C-0.000,154.062 -0.121,140.572 10.000,117.812 C16.057,104.191 19.856,95.634 22.000,87.812 C23.178,83.513 25.469,76.683 32.000,87.812 C35.851,94.374 36.000,103.812 36.000,103.812 C36.000,103.812 50.328,92.817 60.000,71.812 C74.179,41.019 62.866,22.612 59.000,9.812 C57.662,5.384 56.822,-2.574 66.000,0.812 C75.352,4.263 100.076,21.570 113.000,39.812 C131.445,65.847 138.000,90.812 138.000,90.812 C138.000,90.812 143.906,83.482 146.000,75.812 C148.365,67.151 148.400,58.573 155.999,67.813 C163.226,76.600 173.959,93.113 180.000,108.812 C190.969,137.321 187.899,164.809 187.899,164.809 Z"
                                id="path-1"
                                class="fire-1"
                                fill-rule="evenodd"
                              />
                              <path
                                d="M94.000,254.812 C58.101,254.812 29.000,225.711 29.000,189.812 C29.000,168.151 37.729,155.000 55.896,137.166 C67.528,125.747 78.415,111.722 83.042,102.172 C83.953,100.292 86.026,90.495 94.019,101.966 C98.212,107.982 104.785,118.681 109.000,127.812 C116.266,143.555 118.000,158.812 118.000,158.812 C118.000,158.812 125.121,154.616 130.000,143.812 C131.573,140.330 134.753,127.148 143.643,140.328 C150.166,150.000 159.127,167.390 159.000,189.812 C159.000,225.711 129.898,254.812 94.000,254.812 Z"
                                id="path-2"
                                class="fire-2"
                                fill-rule="evenodd"
                              />
                              <path
                                d="M95.000,183.812 C104.250,183.812 104.250,200.941 116.000,223.812 C123.824,239.041 112.121,254.812 95.000,254.812 C77.879,254.812 69.000,240.933 69.000,223.812 C69.000,206.692 85.750,183.812 95.000,183.812 Z"
                                id="path-3"
                                class="fire-3"
                                fill-rule="evenodd"
                              />
                            </g>
                          </svg>
                        </div>
                      );
                    } else {
                    }
                  })()}
                </div>
              ))}
            </div>
          </div>

          <div className="set-length" id="set">
            <div className="header">3. Выберите вколичество роз, шт:</div>
            <div className="input-length">
              <div class="quantity_inner">
                <button
                  class="bt_minus"
                  onClick={() => [
                    SetLength((length -= 1)),
                    SetPrice({...Price, lenght :  Price.lenght -= oneItemPrice  }), 
                  ]}
                >
                  <svg viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
                <input
                min={length}
                max={100}
                  type="number"
                  class="quantity"
                  defaultValue={length}
                  value={length}
                  onChange={(el) => [
                    SetLength(el.target.value),
                    SetPrice({...Price, lenght :  Price.lenght = oneItemPrice *  el.target.value   }), 
                  ]}
                />
                <button
                  class="bt_plus"
                  onClick={() => [
                    console.log(length),
                    SetLength((length += 1)),
                    SetPrice({...Price, lenght :  Price.lenght += oneItemPrice  }), 
                    console.log(Price)

                  ]}
                >
                  <svg viewBox="0 0 24 24">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="set-packaging" id="set">
            <div className="header">
              4. Выберите упаковку: <h3>{wrapper["translate-title"]}</h3>
            </div>
            <div className="set-wrapper">
              {product.wrapper.map((el, key) => (
                        <div key={key}
                  className="wrapper-img"
                  onClick={() => [
                    SetWrapper(el), SetPrice({...Price, wrapper : el.plus})
               ] }
                >
                  <img src={require(`../static-img/flor2/${el.img}`)} alt="" />
                  <div className="title">{el["translate-title"]}</div>
                  <div className="plus">{el.plus} &#x20bd;</div>
                </div>
              ))}
            </div>
          </div>
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
            <div className="share">
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
   
            </div>
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
          <div className="alike">
            <div className="title">Вам может понравиться</div>
            <div className="img">
              {randomArrays().map((els, key) => (
                <Link to={`/product/${els["unique-url"]}`}>
                  <div key={key} className="alike-img">
                    <img src={require(`../static-img/flor2/${els.Id}.png`)} alt="" />
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
          </div>
        </div>
      </div>
    </>
  );
}