import React, {useEffect} from 'react'
import '../style/home.css'
import {Swipers} from './swipes' 
import {Slider} from './slider'
import Login from './login' 
import {  Link , useParams , useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as types from "../store/types"
import DefaultButton from './_microComponents/DefaultButton'
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
      <img src={require('../static-img/articles/retro.jpg')} width={'100%'} alt="" />
    <Link to={'/article'}>
      <div className="button">Перейти</div>
    </Link>
      </div>
    </div>

    </>
  )
}
