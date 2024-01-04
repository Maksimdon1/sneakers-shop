import { useEffect, useState } from "react";
import "../../style/register.css";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../../store/actions";


export default function Registration() {
  const [step, Setstep] = useState();
  const [show, SetShow] = useState(1);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [Lastname, setLastname] = useState("");




  


  let navigate = useNavigate();
  useEffect(() => {
    if (password && mail) {
      Setstep('active');
    }
  }, [password]);

  const dispatch = useDispatch();



  const data = useSelector(
		state => state.userLogin
	)
  const alert = useSelector((state) => state.AlertReducer);
  

  useEffect(() => {
    console.log(alert)
  }, [alert]);


  useEffect(() => {
    console.log(data)
  }, [data]);


  if (alert.state && alert.type === "success" && data.userInfo) {
    navigate("/user");
  }  
  // if(alert.state && alert.type === "success"){
  //   navigate("/user");

  async function SetRegistration() {
    dispatch(registration(mail, password, Name, Lastname));
    // dispatch(test())

  }

  function showPage(type) {
    if (show <= 2) {
      if (password && mail) {
        if(type==='next'){
        document.querySelectorAll(`#step-${show}`)[0].style.display = "none";
        document.querySelectorAll(`#step-${show + 1}`)[0].style.display =
          "flex";
        document.querySelectorAll(`#progress-bar`)[0].style.width = "100%";

        document.querySelectorAll(`#step2`)[0].style['border-color'] = "lightseagreen";
        document.querySelectorAll(`#step2`)[0].style['background-color'] = "lightseagreen";


        
        SetShow(show + 1);
      }
      if(type==='back'){
        document.querySelectorAll(`#step-${show}`)[0].style.display = "none";
        document.querySelectorAll(`#step-${show - 1}`)[0].style.display =
          "flex";
        document.querySelectorAll(`#progress-bar`)[0].style.width = "0%";

        document.querySelectorAll(`#step2`)[0].style['border-color'] = "white";
        document.querySelectorAll(`#step2`)[0].style['background-color'] = "white";


        
        SetShow(show + 1);
      }
    }
    }
  }

  function showPassword() {
    let input = document.querySelector("#password");
    if (input.getAttribute("type") == "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
  }


  return (
    <div className="registration">
          <div className="title">Давайте знакомиться</div>
      <div id="progress">
        <div id="progress-bar"></div>
        <ul id="progress-num">
          <li class="step active" id="step1"  >1</li>
          <li class="step active" id="step2"  >2</li>
        </ul>
      </div>
      <form
        class="form"
        onSubmit={(el) => {
          el.preventDefault();
        }}
      >
        <div className="step-1" id="step-1">
          <div class="flex-column">
            <label>Почта </label>
          </div>
          <div class="inputForm">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              type="text"
              autoFocus="true"
              required
              class="input"
              onChange={(el) => {
                setMail(el.target.value);
              }}
              placeholder="Почта"
            />
          </div>

          <div class="flex-column">
            <label>Пароль </label>
          </div>
          <div class="inputForm">
            <svg
              height="20"
              viewBox="-64 0 512 512"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
              <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
            </svg>
            <input
              type="password"
              onChange={(el) => {
                setPassword(el.target.value);
              }}
              id="password"
              class="input"
              placeholder="Пароль"
            />
            <svg
              viewBox="0 0 576 512"
              onClick={() => {
                showPassword();
              }}
              id="watch"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path>
            </svg>
          </div>

          <div class="flex-row">
            <span class="span">Забыли пароль ?</span>
          </div>
          <button
            class={"button-submit"+ ' '+ step}
            onClick={() => {
              showPage('next');
            }}
          >
           Далее
          </button>
        </div>
        <div className="step-2" id="step-2">
          <div class="flex-column">
            <label>Имя </label>
          </div>
          <div class="inputForm">
            <input
              type="text"
              autoFocus="true"
              class="input"
              onChange={(el) => {
                setName(el.target.value);
              }}
              placeholder="Иван"
            />
          </div>

          <div class="flex-column">
            <label>Фамилия </label>
          </div>
          <div class="inputForm">
            <input
              type="text"
              onChange={(el) => {
                setLastname(el.target.value);
              }}
              id="password"
              class="input"
              placeholder="Иванов"
            />
          </div>

          <div class="flex-row">
            <span class="span">Забыли пароль ?</span>
          </div>
          <button
            class="button-submit active"
            onClick={() => {
              SetRegistration();
            }}
          >
            {" "}
            {step ? <>Зарегистрироваться</> : <></>}{" "}
          </button>

        </div>
        <p class="p">
          Есть аккаунт ? <Link to='/login'> <span class="span">Войти</span></Link>
        </p>
      </form>
      </div>
  );
}
