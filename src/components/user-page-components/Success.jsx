

import {  Link  , useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout, sendActivationMail } from "../../store/actions";
import ConfirmEmail from "../alert-components/ConfirmEmail";
import { User } from './User'
import { Admin } from '../Admin/Admin'

export function Success({data}) {

  let navigate= useNavigate()
  const dispatch = useDispatch()
  console.log(data)

  const links = [
    {
      "Title": "Избранное",
      "Link": "favourites",
    },
    {
      "Title": "Партнерская программа",
      "Link": "referal",
    },
    {
      "Title": "Мои заказы",
      "Link": "my-orders",
    },
    {
      "Title": "Адресса доставки",
      "Link": "delivery-ddresses",
    },
    {
      "Title": "Про нас",
      "Link": "about",
    },
     
  ]



  if(data.Status === 'User'){
    return <User data ={data}/>
  }
  if(data.Status === 'Admin'){
    
    return <Admin data ={data}/>
  }

    
  

}
