import React, { useEffect } from 'react'
import '../style/bottom-panel.css'
import { useDispatch, useSelector } from 'react-redux';
import {  Link } from 'react-router-dom';
export default function BottomHeader(){
  const data = useSelector(
		state => state.PathReducer
	)

  const[ active, setActive ] = React.useState(false);
  function setActiveIcon(element){
      const dom = {
        home: document.querySelectorAll('.bottom-home')[0],
        catalog: document.querySelectorAll('.bottom-catalog')[0],
        basket : document.querySelectorAll('.bottom-basket')[0],
        chat: document.querySelectorAll('.bottom-chat')[0],
        user: document.querySelectorAll('.bottom-user')[0],

      }
      if(active){
      dom[active].classList.remove('active');
      dom[element].classList.add('active');
      setActive(element)
      }
      else{
        dom[element].classList.add('active');
        setActive(element)
      }
  }
  
  useEffect(() => {
    if(data.MainPath !== ''){

      setActiveIcon(data.MainPath)
    }
  
    

     }, [data]);
   

    return (
      <div className='bottom-header'>
        <Link to={'/'} onClick={(el)=>{setActiveIcon('home')}}>
           <div className="bottom-home">
  
  <svg width="800px" height="800px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#414141" stroke-width="0.00028">
  
  <g id="SVGRepo_bgCarrier" stroke-width="0"/>
  
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
  
  <g id="SVGRepo_iconCarrier">
  
  <path clip-rule="evenodd" d="M16.3382 1.94393L25.9705 9.82424L26.0201 9.8788C26.1701 10.0437 26.3998 10.3064 26.5943 10.6198C26.7798 10.9189 27 11.3686 27 11.8956V24.9976C27 26.1013 26.1068 27 25 27H18.7601C17.9317 27 17.2601 26.3284 17.2601 25.5V20.7939C17.2601 18.9948 15.8058 17.5405 14.0168 17.5405C12.2279 17.5405 10.7735 18.9948 10.7735 20.7939V25.5C10.7735 26.3284 10.102 27 9.27354 27H3C1.89318 27 1 26.1013 1 24.9976V11.7425C1 11.0901 1.36299 10.564 1.56986 10.3028C1.69049 10.1505 1.80873 10.0264 1.89631 9.94036C1.9407 9.89677 1.97877 9.86147 2.0074 9.83565C2.02175 9.8227 2.03384 9.81204 2.0433 9.80382L2.05551 9.79329L2.06007 9.7894L2.06278 9.7871C2.06278 9.7871 2.06356 9.78646 2.7075 10.5515L2.06356 9.78646L2.07352 9.77807L11.6288 1.94617C12.9452 0.685478 15.0206 0.684487 16.3382 1.94393ZM3.35246 11.3159L3.3468 11.3209C3.33673 11.33 3.31953 11.3459 3.29759 11.3674C3.25251 11.4117 3.19388 11.4736 3.13764 11.5446C3.07966 11.6178 3.038 11.6834 3.01374 11.7344C3.00661 11.7494 3.00238 11.7602 3 11.767V24.9976L3.00006 24.9992L3.0007 25H8.77354V20.7939C8.77354 17.8948 11.1188 15.5405 14.0168 15.5405C16.9149 15.5405 19.2601 17.8948 19.2601 20.7939V25H24.9993L24.9999 24.9992L25 24.9976V11.8956C25 11.8989 25.0008 11.8992 25 11.8956C24.9966 11.8812 24.9788 11.8095 24.8948 11.6742C24.8108 11.5389 24.7005 11.4037 24.588 11.2772L15.004 3.43645L14.9714 3.40439C14.4228 2.86484 13.5451 2.86525 12.997 3.40534L12.9644 3.43744L3.35246 11.3159Z" fill="#414141" fill-rule="evenodd"/>
  
  </g>
  
  </svg>

     </div>
     <div className="title">главная</div>
     </Link>
     <Link to={'/catalog'} onClick={(el)=>{setActiveIcon('catalog')}} >
        <div className="bottom-catalog">
        <svg   viewBox="0 0 32 32">
          <path fill-rule="evenodd" d="M4 4v9h9V4H4zM3 2a1 1 0 00-1 1v11a1 1 0 001 1h11a1 1 0 001-1V3a1 1 0 00-1-1H3zm1 17v9h9v-9H4zm-1-2a1 1 0 00-1 1v11a1 1 0 001 1h11a1 1 0 001-1V18a1 1 0 00-1-1H3zm16-4V4h9v9h-9zM17 3a1 1 0 011-1h11a1 1 0 011 1v11a1 1 0 01-1 1H18a1 1 0 01-1-1V3zm8.806 22.234a3.784 3.784 0 10-5.256-5.445 3.784 3.784 0 005.256 5.445zm1.82.976a5.784 5.784 0 10-1.532 1.298l2.126 2.125c.431.431 1.098.465 1.488.074.39-.39.357-1.057-.074-1.488l-2.009-2.009z"  clip-rule="evenodd"/>
        </svg>


        </div>
        <div className="title">каталог</div>
        </Link>
   
        <Link to={'/basket'} onClick={(el)=>{setActiveIcon('basket')}} >
        <div className="bottom-basket">
        <svg width="800px" height="800px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M20 10L18.5145 17.4276C18.3312 18.3439 18.2396 18.8021 18.0004 19.1448C17.7894 19.447 17.499 19.685 17.1613 19.8326C16.7783 20 16.3111 20 15.3766 20H8.62337C7.6889 20 7.22166 20 6.83869 19.8326C6.50097 19.685 6.2106 19.447 5.99964 19.1448C5.76041 18.8021 5.66878 18.3439 5.48551 17.4276L4 10M20 10H18M20 10H21M4 10H3M4 10H6M6 10H18M6 10L9 4M18 10L15 4M9 13V16M12 13V16M15 13V16" stroke="#000000" stroke-width="1.544" stroke-linecap="round" stroke-linejoin="round"/> </g>

</svg>

        </div>
        <div className="title">корзина</div>
        </Link>
        <Link to={'/chat'}  onClick={(el)=>{setActiveIcon('chat')}}>
      <div className="bottom-chat">
      <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/> <path d="M8 12H8.009M11.991 12H12M15.991 12H16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>

</svg>


      </div>
      <div className="title">чат</div>
        </Link>
        <Link to={'/user'}  onClick={(el)=>{setActiveIcon('user')}}>
        <div className="bottom-user">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#414141" stroke-width="0.288"/>

<g id="SVGRepo_iconCarrier"> <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" stroke-width="1.032" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#000000" stroke-width="1.032" stroke-linecap="round" stroke-linejoin="round"/> </g>

</svg>

        </div>
        <div className="title">профиль</div>
</Link>
        
      </div>
    )
  
}
