import { useState, useEffect } from "react";
import "./swiper.css";
import Touches from "../touchesHooks/Touches";
import VideoComponent from "../_microComponents/VideoComponent";

export default function Swiper({ path, lenght }) {

  useEffect(() => {
    let imgs = document.querySelectorAll(".custom-Swiper .swipes > img");
    imgs.forEach(function (element) {
      if (element.width < element.height) {
        element.classList.add("vertical");
      } else {
        element.classList.add("horizontal");
      }
    });
		Promise.all(Array.from(document.images).map(img => {
			if (img.complete)
					return Promise.resolve(img.naturalHeight !== 0);
			return new Promise(resolve => {
					img.addEventListener('load', () => resolve(true));
					img.addEventListener('error', () => resolve(false));
			});
	})).then(results => {
			if (results.every(res => res))
			document.getElementById('0').classList.add("active");
			else
					console.log('some images failed to load, all finished loading');
	});
		
  }, []);

  //

  const [TouchStart, SetTouchStart] = useState();
  const [TouchEnd, SetTouchEnd] = useState();
  const [SwipeType, SetSwipeType] = useState();
  const [ShowId, SetShowId] = useState(1);








  useEffect(() => {
    console.log(SwipeType);
    if (SwipeType === "left") {
			SetSwipeType('')
      if (ShowId === 0) {
        SetShowId(lenght);
        document.querySelector("img.active").classList.remove("active");
        document.getElementById(`${ShowId}`).classList.add("active");
        SetSwipeType("");
        return;
      } else {
        // console.log('right swipe')
        document.querySelector("img.active").classList.remove("active");
        SetShowId(ShowId - 1);
        document.getElementById(`${ShowId}`).classList.add("active");
        SetSwipeType("");
      }
    }
    if (SwipeType === "right") {
			SetSwipeType('')
      console.log(ShowId);
      if (ShowId === lenght) {
        SetShowId(0);
        document.querySelector(".custom-Swiper .swipes > .active").classList.remove("active");
        document.getElementById(`${ShowId}`).classList.add("active");
        SetSwipeType("");
        return;
      } else {
        // console.log('right swipe')
        document.querySelector(".custom-Swiper .swipes > .active").classList.remove("active");
        SetShowId(ShowId + 1);
        document.getElementById(`${ShowId}`).classList.add("active");
        SetSwipeType("");
      }
    }
  }, [SwipeType]);
  useEffect(() => {
    SetSwipeType(Touches(TouchStart, TouchEnd, "horizontal"));
  }, [TouchEnd]);

  return (
    <div
      className="custom-Swiper"
      onTouchStart={(el) => {
        SetTouchStart(el.changedTouches[0].clientX);
      }}
      onTouchEnd={(el) => [SetTouchEnd(el.changedTouches[0].clientX)]}
			onClick={()=>{console.log('click')}}
    >
			<div className="swipes">
      <img
        src={require("../../static-img/img/lodcguwecs/0.jpg")}
        className=""
        id="0"
        alt=""
      />
      <img
        src={require("../../static-img/img/lodcguwecs/1.jpg")}
        id="1"
        alt=""
      />
      <img
        src={require("../../static-img/img/lodcguwecs/2.jpg")}
        id="2"
        alt=""
      />
      <img
        src={require("../../static-img/img/lodcguwecs/3.jpg")}
        id="3"
        alt=""
      />
      <img
        src={require("../../static-img/img/lodcguwecs/4.jpg")}
        id="4"
        alt=""
      />
      <img
        src={require("../../static-img/img/lodcguwecs/5.jpg")}
        id="5"
        alt=""
      />
      <img
        src={require("../../static-img/img/lodcguwecs/6.jpg")}
        id="6"
        alt=""
      />
					<VideoComponent id = {7} />
					</div>
					<div className="lenght">{ShowId}/{lenght}</div>
    </div>
  );
}
