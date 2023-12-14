import React from 'react'
import { Link } from "react-router-dom";
import '../../style/user-components/favorite.scss'

export default function Favourites() {
    
    const [favorite, setFavourite] = React.useState(data)
    function deliteLike(url){
      console.log(url)
  
      let list_like = JSON.parse(localStorage.getItem("like"));
      if (list_like == null) {
       localStorage.setItem("like", JSON.stringify([]));
       list_like = JSON.parse(localStorage.getItem("like"));
      }
   
      if (list_like.includes(url)) {
       list_like.splice(list_like.indexOf(url), 1);
      } else {
      
      }
   
      localStorage.setItem("like", JSON.stringify(list_like));
      setFavourite(data())
   
     }
   
    
    function data() {
      
        const list = require("../../sneakers.json");
        const urls = JSON.parse(localStorage.getItem("like"))
        const favorit = []
        
      
      
        list['goods'].forEach((element) => {
          //  console.log(element)
            if(urls.includes(element["unique_code"])){
        

            
          
         favorit.push(element);
            }
        });
        return favorit;
       }
      

  return (
   <>
   <div className="favorites">
        <div className="title">Избранное</div>
        <div className="list">
          {favorite.map((el)=>(
                <>
                  <Link to={`/product/${el["unique_code"]}`}>
                <div className="cart">
                    <div className="img" ><img src={require(`../../static-img/img/${el.unique_code}/1.jpg`)} alt="" srcset="" /></div>
                    <div className="item-info">
                    <div className="title">{el.title}</div>
                    <div className="delite"     onClick={(els)=> {    els.preventDefault();   deliteLike( el["unique_code"])}}>
                    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"/>
            </svg>
                    </div>
                    {/* <div className="value">
<div class="quantity_inner">        
    <button class="bt_minus">
        <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    </button>
    <input type="text" value="1" size="2" class="quantity" data-max-count="20" />
    <button class="bt_plus">
        <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    </button>
</div>
            </div> */}
                    <div className="price">{el.price} &#x20bd; </div>
                    <div className="real-price">
                <div className="price">
                  {el.price * 1.2} <span>&#x20bd; </span>{" "}
                </div>{" "}
                <div className="percent">-20%</div>
              </div>
                    
                    </div>
                   

                </div>
                </Link>
                </>
            ))
          }
        </div>
   </div>
   </>
  )
}
