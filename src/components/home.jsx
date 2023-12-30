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

    </>
  )
}
