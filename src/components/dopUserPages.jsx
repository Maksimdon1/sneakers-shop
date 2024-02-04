import React from 'react'
import { useSearchParams } from "react-router-dom";
import NotFound from './NotFound';
import {useNavigate} from "react-router-dom";
import share from './share';
import '../style/dopuserpage.css'
import { useCallback, useEffect, useState } from 'react';
import Promocodes from './user-components/promocodes';
import Referal from './user-components/referal';
import Bonuses from './user-components/bonuses';
import MyOrders from './user-components/My-orders';
import Favourites from './user-components/Favourites';
import DeliveryAdresses from './user-components/Delivery-ddresses';
import About from './user-components/About';
import Edit from './user-components/Edit';
import Money from "./user-components/Money"

export default function DopUserPages() {
    const [searchParams] = useSearchParams();
    const history = useNavigate();
    const link = searchParams.get('show')

    const params= {
        'promocodes': <Promocodes/>,
        'bonuses': <Bonuses/>,
        'referal': <Referal/>,
        'favourites': <Favourites/>,
        'my-orders': <MyOrders/>,
        'delivery-ddresses': <DeliveryAdresses/>,
        'about': <About/>,
        'edit': <Edit/>,
        'money': <Money/>
   

    }

 
    if(params[link]){

        return (
            <>
            <div className="arrow-back" onClick={()=>{history(-1)}}>
                <img src={require('../static-img/svg/arrow-narrow-circle-broken-left-svgrepo-com.svg').default} alt="" />
            </div>
            {params[link]}
            </>
            )
    }
    else{
        return <NotFound   />
    }


  
    

}
