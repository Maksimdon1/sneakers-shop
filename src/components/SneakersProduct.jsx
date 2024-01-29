import { useParams } from "react-router-dom";
import { useState, useEffect , useCallback} from "react";
import React from "react";
import "../style/product.scss";
import { useNavigate } from "react-router-dom";
import { ProductSwiper } from "./snekers-product-swiper";

import { Link } from "react-router-dom";
import { Delivery } from "./Delivery";
import { share } from "./share";
import { gsap } from "gsap";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../store/types";
import Swiper from "./_customSwiper/Swiper";
import InfoTextComponent from "./_microComponents/InfoTextComponent";
import Characteristic from "./_microComponents/Characteristic";
import Description from './_microComponents/Description.jsx'

export default function SneakersProduct() {
  // useEffect(() => {
  //    document.querySelectorAll('.bottom-header')[0].style.display = 'none'
  //    document.querySelectorAll('header')[0].style.display = 'none'
   
  // }, []);


  const dispatch = useDispatch();
  const history = useNavigate();
  const { url } = useParams();

  const [product, SetProduct] = useState(getValue);
  console.log(product);
  const [Price, SetPrice] = useState({ lenght: product.price, wrapper: 0 });
  const [color, SetColor] = useState(product["default-color"] | "");
  const [size, Setsize] = useState(product["default-size"] | "");
  const oneItemPrice = product["oneItemPrice"];

  let [length, SetLength] = useState(product["default-length"] | "");
  let [wrapper, SetWrapper] = useState(product["default-wrapper"] | "");
  const [Isliked, SetIsLiked] = useState(false);




  let loadImageOnCanvasAndThenWriteText = (canvas, imageUrl, textToWrite, textStyleOptions) => {
    // Get the 2D Context from the canvas
    let ctx = canvas.getContext("2d");
  
    // Create a new Image
    let img = new Image();
  
    // Setting up a function with the code to run after the image is loaded
    img.onload = () => {
      // Once the image is loaded, we will get the width & height of the image
      let loadedImageWidth = img.width;
      let loadedImageHeight = img.height;
  
      ctx.beginPath();
      ctx.arc(100, 100, 50, 0, 2 * Math.PI);
      ctx.strokeStyle = '#000'; // тёмно-синий цвет
      ctx.lineWidth = 1; // толщина линии в 5px
      ctx.stroke();
      
   
      // Draw the image on to the canvas.
      // ctx.drawImage(img, 0, 0);
  
      // // Set all the properties of the text based on the input params
      // ctx.font = `${textStyleOptions.fontSize}px ${textStyleOptions.fontFamily}`;
      // ctx.fillStyle = textStyleOptions.textColor;
      // ctx.textAlign = textStyleOptions.textAlign;
      
      // // Setting this so that the postion of the text can be set
      // // based on the x and y cord from the top right corner
      // ctx.textBaseline = "top";
      
      // // Finanlly addeing the text to the image
      // ctx.fillText(textToWrite,loadedImageWidth * 0.97, loadedImageHeight * 0.93);
    };
  
    // Now that we have set up the image "onload" handeler, we can assign
    // an image URL to the image.
    img.src = imageUrl;
  };
  
  useEffect(() => {
  

  // Run code after the page is loaded
 
    // Setting up the canvas
    let theCanvas = document.getElementById("myCanvas");
  
    // Some image URL..
    let imageUrl = require('../static-img/img/lodcguwecs/5.jpg');
  
    let textStyleOptions = {
      fontSize: 40,
      fontFamily: "Arial",
      textColor: "rgba(255, 255, 255)",
      textAlign: "end"
    };
  
    let textToWrite = "Sneaker-shop.ru";
  
    // let xCordOfText = 100;
    // let yCordOfText = '100';
  
    // Load image on the canvas & then write text
    loadImageOnCanvasAndThenWriteText(
      theCanvas,
      imageUrl,
      textToWrite,
      textStyleOptions,
      // xCordOfText,
      // yCordOfText
    );

  
  }, []);













  function Islike(url, type) {
    if (type === "get") {
      const list_like = JSON.parse(localStorage.getItem("like"));

      if (list_like.includes(url)) {
        SetIsLiked(true);
      } else {
        SetIsLiked(false);
      }

      localStorage.setItem("like", JSON.stringify(list_like));
    } else {
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
      Islike(url, "get");
      gsap.from(`#like-${url} `, {
        duration: 2,
        scale: 0.5,
        opacity: 0.3,

        stagger: 0.1,
        ease: "elastic",
        force3D: true,
      });
    }
  }

  function randomArrays() {
    const data = Array(10)
      .fill()
      .map(() =>
        Math.floor(require("../sneakers.json").goods.length * Math.random()),
      )
      .sort(function (a, b) {
        return a - b;
      });
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      arr.push(
        require("../sneakers.json").goods.filter((el) => el.Id === data[i]),
      );
    }

    return arr;
  }

  function getValue() {
    return require("../sneakers.json").goods.find(
      (el) => el["unique_code"] === url,
    );
  }

  // user language
  //console.log(navigator.language);

  //console.log(navigator.geolocation); oneItemPrice

  function shareProduct() {
    share({
      title: `Привет, посмотри на `,
      text: `Привет, посмотри на `,
      link: `Привет, посмотри на \n https://sneaker-shop.netlify.app/product/sneakers/${product["unique_code"]}`,
      img: `/flor2/${product.Id}.png`,
    });
  }

  var Visible = function (target) {
    try {
      if (target) {
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
      }
    } catch (err) {}
  };
  const path = useSelector((state) => state.PathReducer);

  useEffect(() => {
    // При перерисовке страницы, вызываем функцию для скрола вверх
    window.scrollTo(0, 0);
    SetProduct(getValue);
    Islike(url, "get");

    var element = document.querySelector(".sell-info");

    // if (element) {
    //   window.addEventListener("scroll", () => {
    //     Visible(element);
    //   });
    // }
  }, [url]);

  useEffect(() => {
    dispatch({
      type: types.SET_MAIN_PATH,
      payload: 'catalog',
    })




    dispatch({
      type: types.PATH_ADD,
      payload: {
        path: `/product/${product["unique-url"]}`,
        title: product["title"],
      },
    });
  }, []);
console.log(product)
  // А также запустим функцию сразу. А то вдруг, элемент изначально видно

  return (
		<>
			<div className="function-bar">
				<div
					className="arrow-back"
					onClick={() => {
						history(-1);
					}}
				>
					<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</div>
				<div className="functions">
					<div className="location">
						<svg width="800px" height="800px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<path d="M309.2 584.776h105.5l-49 153.2H225.8c-7.3 0-13.3-6-13.3-13.3 0-2.6 0.8-5.1 2.2-7.3l83.4-126.7c2.5-3.6 6.7-5.9 11.1-5.9z" fill="#FFFFFF" />
							<path
								d="M404.5 791.276H225.8c-36.7 0-66.5-29.8-66.5-66.5 0-13 3.8-25.7 11-36.6l83.4-126.7c12.3-18.7 33.1-29.9 55.5-29.9h178.4l-83.1 259.7z m-95.3-206.5c-4.5 0-8.6 2.2-11.1 6l-83.4 126.7c-1.4 2.2-2.2 4.7-2.2 7.3 0 7.3 6 13.3 13.3 13.3h139.9l49-153.2H309.2z"
								fill="#333333"
							/>
							<path d="M454.6 584.776h109.6l25.3 153.3H429.3z" fill="#FFFFFF" />
							<path d="M652.2 791.276H366.6l42.8-259.6h200l42.8 259.6z m-222.9-53.2h160.2l-25.3-153.3H454.6l-25.3 153.3z" fill="#333333" />
							<path d="M618.6 584.776h105.5c4.5 0 8.6 2.2 11.1 6l83.5 126.7c4 6.1 2.3 14.4-3.8 18.4-2.2 1.4-4.7 2.2-7.3 2.2H667.7l-49.1-153.3z" fill="#FFFFFF" />
							<path
								d="M807.6 791.276H628.9l-83.1-259.7h178.4c22.4 0 43.2 11.2 55.5 29.9l83.4 126.7c9.8 14.8 13.2 32.6 9.6 50s-13.7 32.3-28.6 42.1c-10.8 7.2-23.5 11-36.5 11z m-139.9-53.2h139.9c2.6 0 5.1-0.8 7.3-2.2 4-2.6 5.3-6.4 5.7-8.4 0.4-2 0.7-6-1.9-10l-83.4-126.6c-2.5-3.8-6.6-6-11.1-6H618.6l49.1 153.2z"
								fill="#333333"
							/>
							<path d="M534.1 639.7C652.5 537.4 711.7 445.8 711.7 365c0-127-102.7-212.1-195-212.1s-195 85.1-195 212.1c0 80.8 59.2 172.3 177.7 274.7 9.9 8.6 24.7 8.6 34.7 0z" fill="#8CAAFF" />
							<path
								d="M516.7 672.7c-12.5 0-24.9-4.3-34.8-12.9C356.2 551.2 295.1 454.7 295.1 365c0-142.8 114.6-238.7 221.6-238.7S738.3 222.2 738.3 365c0 89.7-61.1 186.2-186.9 294.8-9.8 8.6-22.3 12.9-34.7 12.9z m0-493.2c-79.7 0-168.4 76.2-168.4 185.5 0 72.3 56.7 158 168.4 254.6C628.5 523 685.1 437.3 685.1 365c0-109.3-88.7-185.5-168.4-185.5z"
								fill="#333333"
							/>
							<path d="M516.7 348m-97.5 0a97.5 97.5 0 1 0 195 0 97.5 97.5 0 1 0-195 0Z" fill="#FFFFFF" />
							<path
								d="M516.7 472.1c-68.4 0-124.1-55.7-124.1-124.1s55.7-124.1 124.1-124.1S640.8 279.5 640.8 348 585.1 472.1 516.7 472.1z m0-195.1c-39.1 0-70.9 31.8-70.9 70.9 0 39.1 31.8 70.9 70.9 70.9s70.9-31.8 70.9-70.9c0-39.1-31.8-70.9-70.9-70.9z"
								fill="#333333"
							/>
						</svg>
					</div>

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
				</div>
			</div>
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

			<div className="price-small">
				<div className="buy">
					<div className="buy-now">Купить сейчас </div>
					<div className="discount-price">
						{Math.round((Price.lenght + Price.wrapper) / 10) * 10} <span>&#x20bd; </span>
					</div>
				</div>
				<div className="add-to-basket">В корзину</div>
				<div
					className="like-small"
					onClick={(el) => {
						Islike(url, "change");
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
					<Swiper
						lenght={2}
						url={product.unique_code}
						path={[
							{
								path: "1",
							},
							
						]}
					/>
					{/* <ProductSwiper img={[product["unique_code"],product["unique_code"]]} /> */}
				</div>
				<div className="info">
					<div className="title">{product.title}</div>

					<div className="info-grid">
						<div className="sell-info">
							<div className="window">
								<div className="line-1">
									<div className="price-big">
										<div className="price-info">
											<div className="discount-price">
												{Math.round((Price.lenght + Price.wrapper) / 10) * 10} <span>&#x20bd; </span>{" "}
											</div>
											<div className="real-price">
												<div className="price">
													{Math.round(((Price.lenght + Price.wrapper) * 1.2) / 10) * 10} <span>&#x20bd; </span>{" "}
												</div>{" "}
												<div className="percent">-20%</div>
											</div>
										</div>
									</div>
									<div className="container">
										<div className="bonuses">
											Вернем {Math.round(((Price.lenght + Price.wrapper) * 0.11) / 1) * 1} баллами{" "}
											<div className="icon">
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
												Islike(url, "change");
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
						</div>

						<Characteristic array={product} defaultOpen={true} />

						<InfoTextComponent
							BackgroundColor={"#41E05E"}
							Width={"100%"}
							label={
								<div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", width: "100%" }}>
									<div>Завтра</div>
									<div style={{ fontSize: "14px" }}>с 12 до 14</div>
								</div>
							}
						/>
						<Description array={product} />
						<Delivery />
					</div>
				</div>
				<canvas id="myCanvas"></canvas>
			</div>
		</>
  );
}
