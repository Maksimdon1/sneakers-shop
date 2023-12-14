import React, {useEffect} from 'react'
import '../style/home.css'
import {Swipers} from './swipes' 
import {Slider} from './slider'
import Login from './login' 
import {  Link , useParams , useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as types from "../store/types"
export  function Home() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
          type: types.SET_MAIN_PATH,
          payload: 'home',
        })
        
       }, []);
          
    
   

  return (
    <>
    <div className="home">
        <div className="hello-img">
            <img src={require('../static-img/hello-img.png')} alt="" />
            <div className="hello-buy">
            <div className="header-home">Пришло время купить тот самый букет</div>
            <div className="buy-home">Заказать</div>
            </div>
        </div>

      


        <div className="why-we">
            <div className="whe-we-header">
                Почему выбирают нас ?
            </div>
            <div className="why-we-lists">
                <div className="why-we-list"><div className="header">Быстрая доставка</div><div className="opisanie">
                    <ul>
                    <li>По Москве и области</li>
                    <li>Пришлем фото перед отправкой</li>
                    <li>Доставка за несколько часов до квартиры</li>
                    </ul>
                    </div>
                    </div>
                <div className="why-we-list"><div className="header">Возможность самим создать букет</div>
                <div className="opisanie">
                    <ul>
                        <li>Можно создать букет на свой вкус с 0</li>
                        <li>А наши специалисты помогут</li>
                    </ul>
                    </div>
                    </div>
                <div className="why-we-list"><div className="header">Дешевле и качественей</div><div className="opisanie">
                    <ul>
                        <li>Мы даем 5 дневнюю гарантию</li>
                        <li>Если что заменим бесплатно</li>
                    </ul>
                    </div></div>
            </div>

        </div>
       
        <div className="img-navigate">

            <div className="wrapper">
            <div className="box1">            <img src={require('../static-img/icon_4.png')} width="100%" height="100%" alt="" /> 
                                                                                                                <div className="header-big">Все цветы</div> 
                                                                                                                        <div className="header-small">
                                                                                                                              <div className="">Авторские букеты</div>
                                                                                                                              <div className="line"></div>
                                                                                                                              <div className="">Композиции</div>
                                                                                                                              <div className="line"></div>
                                                                                                                              <div className="">Букеты из роз</div>
                                                                                                                        </div> 
                                                                                                                <div className="button"> <div className="div">ВЫБРАТЬ ЦВЕТЫ</div></div>
                                                                                                                     </div>

            <div className="box2"><Link to={'/katalog?params=hits'} >        <img src={require('../static-img/icon_3.jpg')}  width="100%" height="100%"alt="" /> </Link><div className="header">Хиты продаж</div></div>
            <div className="box3"><Link to={'/katalog?params=Bouquets of roses'}>         <img src={require('../static-img/icon_0.jpg')}  width="100%" height="100%"alt="" /> </Link><div className="header">Букеты из роз</div></div>
            <div className="box4"><Link to={'/katalog?params=flower arrangements'}>        <img src={require('../static-img/icon_2.jpg')}  width="100%" height="100%"alt="" /> </Link><div className="header">Цветочные композиции</div> </div>
            <div className="box5"><Link to={'/katalog?params=special offers'}>          <img src={require('../static-img/icon_1.jpg')}  width="100%" height="100%"alt="" /></Link> <div className="header">Cпециальные предложения</div> </div>
            </div>
        </div>
        <div className="img-swiper">
            <div className="swiper">
                <Swipers delay={2500}/>
    

            </div>
        </div>
        <div className="home-reviews">
            <div className="review">
            <div className="user">
            <div className="name">Доофеев Матвей</div>
                <div className="photo">
                <img src={require('../static-img/motya.jpg')} width={'30px'}  height={'30px'} alt="" />
                </div>

                </div>
                <div className="text">
                Очень довольна сервисом, прекрасные цветы, которые приятно пахнут, быстро и оперативно!

                </div>
                <div className="mark">
                <svg xmlns="http://www.w3.org/2000/svg" width="130" height="18" viewBox="0 0 101 16" fill="none">
                <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FFC803"/>
                <path d="M29.12 0L30.9161 5.52786H36.7284L32.0262 8.94427L33.8223 14.4721L29.12 11.0557L24.4177 14.4721L26.2138 8.94427L21.5115 5.52786H27.3239L29.12 0Z" fill="#FFC803"/>
                <path d="M50.24 0L52.0361 5.52786H57.8484L53.1462 8.94427L54.9423 14.4721L50.24 11.0557L45.5377 14.4721L47.3338 8.94427L42.6315 5.52786H48.4439L50.24 0Z" fill="#FFC803"/>
                <path d="M71.36 0L73.1561 5.52786H78.9684L74.2662 8.94427L76.0623 14.4721L71.36 11.0557L66.6577 14.4721L68.4538 8.94427L63.7515 5.52786H69.5639L71.36 0Z" fill="#FFC803"/>
                <path d="M92.48 0L94.2761 5.52786H100.088L95.3862 8.94427L97.1823 14.4721L92.48 11.0557L87.7777 14.4721L89.5738 8.94427L84.8716 5.52786H90.6839L92.48 0Z" fill="#FFC803"/>
                </svg>

                </div>
          
                
            </div>
              <div className="review">
                <div className="user">
               
                <div className="name">Выживалов</div>
                <div className="photo">
                <img src={require('../static-img/motya.jpg')} width={'30px'}  height={'30px'} alt="" />
                </div>
                </div>


                <div className="text">

Пользуюсь услугами этой цветочницы с самого открытия в нашем городе, всегда удовлетворен ценами и качеством заказов.
</div>
                
                <div className="mark">
                <svg xmlns="http://www.w3.org/2000/svg" width="130" height="18" viewBox="0 0 101 16" fill="none">
                <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FFC803"/>
                <path d="M29.12 0L30.9161 5.52786H36.7284L32.0262 8.94427L33.8223 14.4721L29.12 11.0557L24.4177 14.4721L26.2138 8.94427L21.5115 5.52786H27.3239L29.12 0Z" fill="#FFC803"/>
                <path d="M50.24 0L52.0361 5.52786H57.8484L53.1462 8.94427L54.9423 14.4721L50.24 11.0557L45.5377 14.4721L47.3338 8.94427L42.6315 5.52786H48.4439L50.24 0Z" fill="#FFC803"/>
                <path d="M71.36 0L73.1561 5.52786H78.9684L74.2662 8.94427L76.0623 14.4721L71.36 11.0557L66.6577 14.4721L68.4538 8.94427L63.7515 5.52786H69.5639L71.36 0Z" fill="#FFC803"/>
                <path d="M92.48 0L94.2761 5.52786H100.088L95.3862 8.94427L97.1823 14.4721L92.48 11.0557L87.7777 14.4721L89.5738 8.94427L84.8716 5.52786H90.6839L92.48 0Z" fill="#FFC803"/>
                </svg>
                    
                </div>
             
                
            </div>
            <div className="review">
            <div className="user">
            <div className="name">Доофеев Матвей</div>
                <div className="photo">
                    <img src={require('../static-img/motya.jpg')} width={'30px'}  height={'30px'} alt="" />
                </div>
               
                </div>


                <div className="text">
                    
                    Лучший выбор цветов в Москве. Быстрая и качественная доставка.

            </div>
                <div className="mark">
                <svg xmlns="http://www.w3.org/2000/svg" width="130" height="18" viewBox="0 0 101 16" fill="none">
                <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FFC803"/>
                <path d="M29.12 0L30.9161 5.52786H36.7284L32.0262 8.94427L33.8223 14.4721L29.12 11.0557L24.4177 14.4721L26.2138 8.94427L21.5115 5.52786H27.3239L29.12 0Z" fill="#FFC803"/>
                <path d="M50.24 0L52.0361 5.52786H57.8484L53.1462 8.94427L54.9423 14.4721L50.24 11.0557L45.5377 14.4721L47.3338 8.94427L42.6315 5.52786H48.4439L50.24 0Z" fill="#FFC803"/>
                <path d="M71.36 0L73.1561 5.52786H78.9684L74.2662 8.94427L76.0623 14.4721L71.36 11.0557L66.6577 14.4721L68.4538 8.94427L63.7515 5.52786H69.5639L71.36 0Z" fill="#FFC803"/>
                <path d="M92.48 0L94.2761 5.52786H100.088L95.3862 8.94427L97.1823 14.4721L92.48 11.0557L87.7777 14.4721L89.5738 8.94427L84.8716 5.52786H90.6839L92.48 0Z" fill="#FFC803"/>
                </svg>
                </div>
             
                
            </div>









            <div className="review">
            <div className="user">
            <div className="name">Выживалов</div>
                <div className="photo">
                    <img src={require('../static-img/motya.jpg')} width={'30px'}  height={'30px'} alt="" />
                </div>
               
                </div>


                <div className="text">
                    
                    Лучший выбор цветов в Москве. Быстрая и качественная доставка.

            </div>
                <div className="mark">
                <svg xmlns="http://www.w3.org/2000/svg" width="130" height="18" viewBox="0 0 101 16" fill="none">
                <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FFC803"/>
                <path d="M29.12 0L30.9161 5.52786H36.7284L32.0262 8.94427L33.8223 14.4721L29.12 11.0557L24.4177 14.4721L26.2138 8.94427L21.5115 5.52786H27.3239L29.12 0Z" fill="#FFC803"/>
                <path d="M50.24 0L52.0361 5.52786H57.8484L53.1462 8.94427L54.9423 14.4721L50.24 11.0557L45.5377 14.4721L47.3338 8.94427L42.6315 5.52786H48.4439L50.24 0Z" fill="#FFC803"/>
                <path d="M71.36 0L73.1561 5.52786H78.9684L74.2662 8.94427L76.0623 14.4721L71.36 11.0557L66.6577 14.4721L68.4538 8.94427L63.7515 5.52786H69.5639L71.36 0Z" fill="#FFC803"/>
                <path d="M92.48 0L94.2761 5.52786H100.088L95.3862 8.94427L97.1823 14.4721L92.48 11.0557L87.7777 14.4721L89.5738 8.94427L84.8716 5.52786H90.6839L92.48 0Z" fill="#FFC803"/>
                </svg>
                </div>
             
                
            </div>
        </div>


      
       
    </div>
   

    <Login type={'login'}/>

    </>
  )
}
