import { useState } from "react";
import "../../style/register.css";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import login from "../../store/actions";
import LoadingUser from "../user-page-components/loading.jsx";

export default function Registration() {
  const [isShow, setIsShow] = useState(true);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [promo, setPromo] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  const [request, Setrequets] = useState();
  const [LoginData, SetLoginData] = useState(
    useSelector((state) => state.loginReducer)
  );

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const data = useSelector((state) => state.userLogin);

  const alert = useSelector((state) => state.AlertReducer);
  if (data.loading) {
    return <LoadingUser />;
  }
  if (alert.state && alert.type === "success" && data.userInfo) {
    navigate("/user");
  }

  async function SetLogin() {
    dispatch(login(mail, password));
  }

  // useEffect(() => {
  //   var box = document.getElementById('box');
  //   try {
  //     box.classList.remove('close')

  //   } catch (error) {
  //     console.log(error)
  //   }
  // });

  const ready = () => {
    // find the element that you want to drag.
    var box = document.getElementById("box");
    let height = window.innerHeight;

    box.classList.add("close");

    /* listen to the touchMove event,
      every time it fires, grab the location
      of touch and assign it to box */

    /*  box.addEventListener('touchmove', function(e) {
        // grab the location of touch
        var touchLocation = e.targetTouches[0];
        
        // assign box new coordinates based on the touch.

        box.style.top = touchLocation.pageY + 'px';
        console.log(touchLocation.pageY)
      })
      */
  };

  //  const scroll_block= (()=>{document.body.style.overflow = 'hidden'})
  //  const scroll_enable= (()=>{document.body.style.overflow = ''})
  let start = 0;
  let end = 0;


  function showPassword() {
    let input = document.querySelector("#password");
    if (input.getAttribute("type") == "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
  }

  return (
    <>
<form class="form">
    <div class="flex-column">
      <label>Email </label></div>
      <div class="inputForm">
      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        <input type="text" class="input" placeholder="Почта"/>
      </div>
    
    <div class="flex-column">
      <label>Password </label></div>
      <div class="inputForm">
        <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path><path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path></svg>        
        <input type="password" class="input" placeholder="Пароль"/>
        <svg viewBox="0 0 576 512"  id="watch" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path></svg>
      </div>
    
    <div class="flex-row">
    
      <span class="span">Forgot password?</span>
    </div>
    <button class="button-submit">Sign In</button>
    <p class="p">Don't have an account? <span class="span">Sign Up</span>

    </p>
</form>
        </>
    
  )
}