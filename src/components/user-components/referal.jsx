import React from 'react'
import {share} from '../share';
import { useCallback, useEffect, useState } from 'react';

export default function Referal(){
    const [Iscopied, setIscopied] = useState(false);


    const copy = useCallback(text => {
        if (typeof text != 'string'){
            return
        }
        navigator.clipboard
        .writeText(text)
        .then(() =>{
            setIscopied(true);
        })
        .catch(err=>{
            console.error(err)
        })
      
    }, []);
    useEffect(() => {
       if(Iscopied){
        const timer = setTimeout(() => {
            setIscopied(false);
        }, 3000)
        return () => clearTimeout(timer)
       }
    }, [Iscopied]);
    //copy('')

    return (
        <>
           <div className="referal">
            <div className="icon">
                <img src={require("../../static-img/svg/referral_e5cpxeh8dsy0.svg").default} alt="" />
            </div>
            <div className="text"><h1>Отправь этот код другу.</h1> <h1>Когда друг сделает заказ,</h1> <h1>вы оба получите по 500 </h1> <h1>рублей на бонусный счет</h1></div>
            <div className="copy" onClick={()=>{copy('kvnkf nvjr j')}}>fkevjejv 3r </div>
           
            </div> 
            <div className="share-ref" onClick={()=>{
                 share({
                    title: `Привет, посмотри на ${["title"]}`,
                    text: `Привет, посмотри на ${["title"]}`,
                    link: `https://flower-lover.netlify.app/product/${["unique-url"]}`,
                    img:  `/flor2/1.png`
                  }
               
                   )
            }}><div>поделиться</div> 
            <img src={require("../../static-img/svg/share-2-svgrepo-com.svg").default} alt="" srcset="" />
            </div>
            
        </>
        )
   
}