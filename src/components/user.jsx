import  { useEffect, useState } from "react";
import "../style/user.css";
import * as types from "../store/types"
import LoadingUser from "./user-page-components/loading";
import { Success } from "./user-page-components/Success";
import Login from './login' 
import { useDispatch, useSelector } from 'react-redux';
import {getNewAccessToken} from '../store/actions'

export function User() {
  const [ShowLogin, SetShowLogin] = useState()
  const dispatch = useDispatch()
  const data = useSelector(
		state => state.userLogin
	)


 useEffect(() => {
  dispatch({
    type: types.SET_MAIN_PATH,
    payload: 'user',
  })
  
 }, []);

  useEffect(() => {



      
    if(data.accessToken && data.userInfo){
       dispatch(getNewAccessToken())

  
    }
  
   
  
},[]);



	const alert =  useSelector(
		state => state.AlertReducer
	)
	if(data.userInfo){
    return <Success  data = {data.userInfo}/>
	}

  if (data.loading) {
    return <LoadingUser/>
  }
  if(!data.userInfo | alert.type === 'error' ) {
    setTimeout(function(){
      SetShowLogin(true);
    },2500);

  



  }

  if(ShowLogin){

    return  <Login type='login'/>
  }

}
