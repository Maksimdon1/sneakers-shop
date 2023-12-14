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
   <header onClick={(el) => {
                change_panel() }}>
    
    <div className="logo">  <Link to={'/'} >FlowerLover</Link></div>
    <div className="navigate">
    <div className="button"> <Link to={'/katalog?params=bouquets'} content='flowers'  >Букеты</Link></div>
    <div className="button"> <Link to={'/holidays'}  >Праздники</Link></div>
    <div className="button"> <Link to={'/delivery'} >Доставка</Link></div>
    <div className="button"> <Link to={'/about'} >О нас</Link></div>
    </div>
    <div className="right">
       {/* <div className="search"> */}
       {/* <div class="search-box"> */}
    {/* <button class="btn-search"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"> */}
  {/* <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> */}
{/* </svg></button> */}
    {/* <input type="text" class="input-search" onChange={(el)=>{(Setsearch(el.target.value))}} placeholder="Type to Search..."/> */}
  {/* </div> */}
       {/* </div> */}
       <div className="header-user">
        <Link to={'/user'} >
       
        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <circle cx="12" cy="9" r="3"stroke-width="1.08"/> <circle cx="12" cy="12" r="10"  stroke-width="1.08"/> <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"  stroke-width="1.08" stroke-linecap="round"/> </g>

</svg>
</Link>
              
       </div>

  
              <div className="panel-btn open" >
               <label class="burger" for="burger" >
  <input type="checkbox" id="burger"/>
  <span></span>
  <span></span>
  <span></span>
</label>
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



