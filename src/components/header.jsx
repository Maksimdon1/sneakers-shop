import '../style/header.css'

import { useState } from 'react'
import {  Link , useParams , useNavigate} from 'react-router-dom';
import axios, {Axios} from 'axios';
export  function Header() {
  const [panel, Setpanel] = useState(false)
  const [search, Setsearch] = useState('')
  const [date, setDate] = useState([])
  const [ip, setip] = useState([])

  const change_panel = (()=>{
    console.log(123)
    const main = document.querySelector('.main')
 
    Setpanel(!panel)
    console.log(!panel)
    
    
  })

  
  axios.get('https://api.seeip.org/geoip')
  .then(res => {
    const get_ip  = res.data.ip
  
    setip(get_ip)

  })


  //if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
    //console.log('🎉 Тёмный режим поддерживается');
 // }/

  
    
  


  
  return (
   <>
   <header  >
    
    <div className="logo">  <Link to={'/'} >Sneakers shop</Link></div>
    <div className="navigate">
    <div className="button"> <Link to={'/katalog?params=bouquets'} content='flowers'  >Букеты</Link></div>
    <div className="button"> <Link to={'/holidays'}  >Праздники</Link></div>
    <div className="button"> <Link to={'/delivery'} >Доставка</Link></div>
    <div className="button"> <Link to={'/about'} >О нас</Link></div>
    </div>
    <div className="right">
    <Link to={'/search'} >
      <div className="search">
        <img src={require('../static-img/svg/search.svg').default} alt="" srcset="" />
      </div>
      </Link>
       <div className="header-user">
        <Link to={'/user'} >
       
        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <circle cx="12" cy="9" r="3"stroke-width="1.08"/> <circle cx="12" cy="12" r="10"  stroke-width="1.08"/> <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"  stroke-width="1.08" stroke-linecap="round"/> </g>

</svg>
</Link>
              
       </div>

  <div className=""  onClick={(el) => {
                change_panel() }}>
              <div className={"panel-btn" + " " + (panel? 'open' : 'close')} >
               <label class="burger" for="burger" >

  <span></span>
  <span></span>
  <span></span>
</label>
               </div>
</div>
     

      
      

    </div>
    {panel ? (
        <div className='panel open'>
   
      {ip}
     
        </div>
      ) : (
        <div className='panel close'>

        </div>
      )}

    
   </header>


   
   
   </>
  )
}



// <div className="basket"><img src={ require('../static-img/basket.png')} alt="" width={"30px"} height={"30px"} /></div>
//<div className="user"><img src={require('../static-img/user.png')} alt="" width={"30px"} height={"30px"}  /></div>



