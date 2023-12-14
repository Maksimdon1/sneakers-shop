import { useState, useEffect } from 'react'
import '../../style/login.css'

import {  Link , useParams , useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import login from '../../store/actions'




function LoginForm(props) {

    const [isShow, setIsShow] = useState(true)
    const [type , setType] = useState(props.type)
    const [mail, setMail] =  useState('')
    const [password, setPassword] =  useState('')
    const [promo, setPromo] =  useState('')
    const [width, setWidth] =  useState(window.innerWidth)
    const [ request, Setrequets] = useState()
    const [LoginData, SetLoginData] = useState( useSelector(state=> state.loginReducer ))



 	const dispatch = useDispatch()


   
    async function SetLogin (){

        dispatch(login(mail, password))
      


    }


  
    






    function showPassword(){
         
          let input = document.querySelector('#password')
          if (input.getAttribute('type') == 'password') {
     
            input.setAttribute('type', 'text');
          } else {
          
            input.setAttribute('type', 'password');
          }
    }
   


      
  return (

    <>

    <div className="login" id='box'>
        
        <div className="form" >
   
        {(() => {
        if (width <= 723 && width >=250) {
          return (
            <div className="line"></div>
          )}
          else{
            return (
              <div className="close-login" onClick={(el)=>{setIsShow(false)}}>
              <img src={require('../../static-img/svg/close-filter.png')} alt="" srcset="" />
          </div>
            )

          
        } 
      })()}

            <form id='myForm' onSubmit={(el)=>{(el.preventDefault())}} autoSave='true'
        >
        <div className="header">
            <div className="log-in">Вход</div>
            <div className="sing-in" onClick={()=>{(setType('register'))} }>Зарегистрироваться</div>

            </div>
      
        <div className="input-container">
          <label>Почта</label>
          <input type="text" name="gmail" defaultValue={mail} onChange={(el)=>{(setMail(el.target.value))}}  id='input' autoSave='true' required   autoComplete={'email'}/>

   
        </div>
        <div className="input-container">
          <label>Пароль</label>
          <input type="password" id='password' autoSave='true' defaultValue={password} onChange={(el)=>{(setPassword(el.target.value))}}  name="password" autoComplete='current-password' required />
          <div className="checkbox">
    <input className="custom-checkbox" type="checkbox" id="show-pass"  onClick={(el)=>{showPassword(el)}}/>
    <label for="show-pass">Показать пароль</label>
  </div>
         
        </div>
        <div className="button-container">
          <button className='login-btn' onClick={()=>{SetLogin()}}>войти</button>
        </div> 
   </form>


   <div class="google-btn">
          <div class="google-icon-wrapper">
            <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
          </div>
          <p class="btn-text"><b>Sign in with google</b></p>
        </div>


   



    </div>
    </div>

    </>
  )

     


}


export default LoginForm;