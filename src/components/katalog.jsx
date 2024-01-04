
import { useState, useEffect } from "react";
import "../style/katalog.scss";
import Login from "./login";
import { Link } from "react-router-dom";
import { InfoComponents } from "./infoComponents";
import {useNavigate} from "react-router-dom";
import { gsap } from "gsap";
import BottomPanel from "./BottomPanel";
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../store/types'
import { ProductSwiper } from "./snekers-product-swiper";


export default function Catalog() {
  const [ShowBottomPanel, SetShowBottomPanel] = useState(false)
  const [ShowBottomPanelData, SetShowBottomPanelData] = useState()
  const history = useNavigate();
 const [list, setList] = useState(data);
 const dispatch = useDispatch()
  const path = useSelector(
    state => state.PathReducer
  )
  console.log(path)
 useEffect(() => {
  // При перерисовке страницы, вызываем функцию для скрола вверх
 // window.scrollTo(0, 0);
  setList(data)
  dispatch({
    type: types.PATH_NEW,
    payload: [{'path': '/', 'title': 'главная'},{'path': '/catalog', 'title': 'каталог'} ],
  })


    dispatch({
      type: types.SET_MAIN_PATH,
      payload: 'catalog',
    })
    



  
},[]);
const [snekers, SetSneakers] = useState(require('../sneakers.json').goods)
console.log(snekers)

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
  const array = require("../flowers.json");
  let arr = [];

  const liked = JSON.parse(localStorage.getItem("like"));


  array['products'].forEach((element) => {
    if(liked.includes(element['unique-url'])){
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

  let arr = list;

  const data = arr.map((el) => {
   if (el.Id === id) {
    el.like = !el.like;
    addToLocal(el["unique-url"]);
   }
   return el;
  });

  setList(data);




  gsap.from(`#like-${id} `, {

  
    duration: 2,
    scale: 0.5, 
    opacity: 0.3, 
     
    stagger: 0.1,
    ease: "elastic", 
    force3D: true
      
  
  
    });
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


  {ShowBottomPanel && <div  onTouchMove={(el)=>{voidBottomPanel()}}><BottomPanel params={ShowBottomPanelData} /></div>}
   {/* <Login type={'login'}/> */}
   <div className="katalog">
    <div
     className="katalog-all"
     id="katalog-all"
     onLoad={(el) => {
      showImage();
     }}
    >
     {list.slice(0,6).map((img, key) => (
      <>
       <Link to={`/product/${img["unique-url"]}`} onClick={()=>{history(`/catalog#${img['Id']}`)  }}>
        <div
         key={key}
         className="item"
         id={img.Id}
         onLoad={() => {
          change(img.Id);
         }}
        >
          <ProductSwiper img={[img.Id]} />
        
         <div
          className="like"
          onClick={(el) => {
           el.preventDefault();
           add_To_Like(img.Id);
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
         <div className="card">

       
            <div className="price">
                 <div className="show-price">{img.price} ₽</div>
                  <div className="real-price">

                      {img.price * 1.2} <span>&#x20bd; </span>

                                  
                  </div>
              </div>
              <div className="title">{img.title}</div>
              <div className="delivery-date good" 
              onClick={(el) => {
       el.preventDefault();
       voidBottomPanel({title: 'Доставка на выбранный адрес', description:'Выбрать адрес можно в профиле ', url: '/user/info?show=delivery-ddresses'})
      }}>
                сегодня, через час
              </div>
         </div>
     
        </div>
       </Link>
      </>
     ))}
    </div>
    <div className="infoComponent">
       <InfoComponents type={'cashback'} />
  
    </div>


   <div
     className="katalog-all"
     id="katalog-all"
     onLoad={(el) => {
      showImage();
     }}
    >
     {list.slice(6,14).map((img, key) => (
      <>
      <Link to={`/product/${img["unique-url"]}`} onClick={()=>{history(`/catalog#${img['Id']}`)  }}>
       <div
        key={key}
        className="item"
        id={img.Id}
        onLoad={() => {
         change(img.Id);
        }}
       >
        <img src={require(`../static-img/flor2/${img.Id}.png`)} alt="" />
        <div
         className="like"
         onClick={(el) => {
          el.preventDefault();
          add_To_Like(img.Id);
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
        <div className="card">

      
           <div className="price">
                <div className="show-price">{img.price} ₽</div>
                 <div className="real-price">

                     {img.price * 1.2} <span>&#x20bd; </span>

                                 
                 </div>
             </div>
             <div className="title">{img.title}</div>
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

    <div className="infoComponent">

       <InfoComponents type={'quality'} />
       <InfoComponents type={'delivery'} />
    </div>
    <div
     className="katalog-all"
     id="katalog-all"
     onLoad={(el) => {
      showImage();
     }}
    >
     {list.slice(14,20).map((img, key) => (
   <>
   <Link to={`/product/${img["unique-url"]}`} onClick={()=>{history(`/catalog#${img['Id']}`)  }}>
    <div
     key={key}
     className="item"
     id={img.Id}
     onLoad={() => {
      change(img.Id);
     }}
    >
     <img src={require(`../static-img/flor2/${img.Id}.png`)} alt="" />
     <div
      className="like"
      onClick={(el) => {
       el.preventDefault();
       add_To_Like(img.Id);
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
     <div className="card">

   
        <div className="price">
             <div className="show-price">{img.price} ₽</div>
              <div className="real-price">

                  {img.price * 1.2} <span>&#x20bd; </span>

                              
              </div>
          </div>
          <div className="title">{img.title}</div>
          <div className="delivery-date bad"
           onClick={(el) => {
            el.preventDefault();
            voidBottomPanel({title: 'Доставка на выбранный адрес', description:'Выбрать адрес можно в профиле ', url: '/user/info?show=delivery-ddresses'})
      
           }} >
            в течении дня
          </div>
     </div>
 
    </div>
   </Link>
  </>
     ))}
       {list.slice(20).map((img, key) => (
   <>
   <Link to={`/product/${img["unique-url"]}`} onClick={()=>{history(`/catalog#${img['Id']}`)  }}>
    <div
     key={key}
     className="item"
     id={img.Id}
     onLoad={() => {
      change(img.Id);
     }}
    >
     <img src={require(`../static-img/flor2/${img.Id}.png`)} alt="" />
     <div
      className="like"
      onClick={(el) => {
       el.preventDefault();
       add_To_Like(img.Id);
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
     <div className="card">

   
        <div className="price">
             <div className="show-price">{img.price} ₽</div>
              <div className="real-price">

                  {img.price * 1.2} <span>&#x20bd; </span>

                              
              </div>
          </div>
          <div className="title">{img.title}</div>
          <div className="delivery-date no"
           onClick={(el) => {
            el.preventDefault();
            voidBottomPanel({title: 'Доставка на выбранный адрес', description:'Выбрать адрес можно в профилеВыбрать адрес можно в профилеВыбрать адрес можно в профилеВыбрать адрес можно в профилеВыбрать адрес можно в профилеВыбрать адрес можно в профилеВыбрать адрес можно в профилеВыбрать адрес можно в профилеВыбрать адрес можно в профилеВыбрать адрес можно в профилеВыбрать адрес можно в профилеВыбрать адрес можно в профилеВыбрать адрес можно в профилеВыбрать адрес можно в профиле ', url: '/user/info?show=delivery-ddresses'})
      
           }} >
            нет в наличии
          </div>
     </div>
 
    </div>
   </Link>
  </>
     ))}
    </div>

  
  
   </div>

  </>

 );
}
