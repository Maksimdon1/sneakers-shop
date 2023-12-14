import React from 'react'
import '../style/InfoComponents.css'
export function InfoComponents(props) {
    function close(id) {

        const el = document.querySelector(`#info-component-${id}`)

        el.classList.add('closing')
        setTimeout(function(){
        el.style.display = "none"
        el.classList.remove('closing')},1950);
        

      //  el.style.display = "none"

    }
    const list = {
        'delivery' :{
            'id':0,
            'title-big' : 'Срочная доставка',
            'title-small' : 'за 2 часа',
            'icon': 'truck.svg'
        },
        'quality' :{
            'id':1,
            'title-big' : 'Гарантия качества',
            'title-small' : 'если букет не понравится мы его поменяем',
            'icon': 'like_2wuekreisd5i.svg'
        },
        'cashback' :{
            'id':2,
            'title-big' : 'Система лояльности',
            'title-small' : '10% на ваш счет с каждой покупки',
            'icon': 'cashback_befetknuew06.svg'
        },
    }
    
 

    if(props.type){
        return (
            <>
        <div className={props.type+'-component'}  id={'info-component-'  + list[props.type].id}>
            <div className="close" onClick={(el)=>{close(list[props.type].id)}}>
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"/>
            </svg>
            </div>
            <div className="info">
                <div className="title-big">{list[props.type]['title-big']}</div>
                <div className="title-small">{list[props.type]['title-small']}</div>
            </div>
            <div className="icon">
                <img src={require(`../static-img/svg/${list[props.type].icon}`)} alt=""/>
            </div>
        </div>
            </>
            )
    }


    

    
}
