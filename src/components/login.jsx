import { useState } from "react";
import "../style/login.css";
import "../style/register.css";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import login from "../store/actions";
import ErrorUser from "./user-page-components/error";
import LoadingUser from "./user-page-components/loading";

function Login(props) {
  const [isShow, setIsShow] = useState(true);
  const [type, setType] = useState(props.type);
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
  let state = "default";
  function check() {
    const el = document.querySelectorAll(".login");

    console.log(start, end, state);
    if (start && end) {
      if (start < end) {
        console.log("bottom");
        if (state === "default") {
          el[0].style.height = "60px";
          state = "min";
          el[0].style["border-radius"] = "40px 40px 0 0";
        } else if (state === "max") {
          state = "default";
          el[0].style.height = "auto";
          el[0].style["border-radius"] = "40px 40px 0 0";
        }
      } else {
        if (state === "default") {
          console.log("top");
          state = "max";
          el[0].style.height = "calc(100% - 40px)";
          el[0].style["border-radius"] = "0px";
        } else if (state === "min") {
          state = "default";
          el[0].style["border-radius"] = "40px 40px 0 0";

          el[0].style.height = "auto";
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

  if (isShow) {
    if (type === "login") {
      return (
        <>
          <div className="login" id="box">
            <div className="form">
              {(() => {
                if (width <= 723 && width >= 250) {
                  return (
                    <div
                      className="line"
                      onTouchStart={(el) => {
                        start = el.changedTouches[0].clientY;
                      }}
                      onTouchEnd={(el) => [
                        (end = el.changedTouches[0].clientY),
                        check(),
                      ]}
                    ></div>
                  );
                } else {
                  return (
                    <div
                      className="close-login"
                      onClick={(el) => {
                        setIsShow(false);
                      }}
                    >
                      <img
                        src={require("../static-img/close-filter.png")}
                        alt=""
                        srcset=""
                      />
                    </div>
                  );
                }
              })()}

              <form
                id="myForm"
                onSubmit={(el) => {
                  el.preventDefault();
                }}
                autoSave="true"
              >
                <div className="header">
                  <div className="log-in">Вход</div>
                  <div
                    className="sing-in"
                    onClick={() => {
                      setType("register");
                    }}
                  >
                    Зарегистрироваться
                  </div>
                </div>

                <div className="input-container">
                  <label>Почта</label>
                  <input
                    type="text"
                    name="gmail"
                    defaultValue={mail}
                    onChange={(el) => {
                      setMail(el.target.value);
                    }}
                    id="input"
                    autoSave="true"
                    required
                    autoComplete={"email"}
                  />
                </div>
                <div className="input-container">
                  <label>Пароль</label>
                  <input
                    type="password"
                    id="password"
                    autoSave="true"
                    defaultValue={password}
                    onChange={(el) => {
                      setPassword(el.target.value);
                    }}
                    name="password"
                    autoComplete="current-password"
                    required={true}
                  />
                  <div className="checkbox">
                    <input
                      className="custom-checkbox"
                      type="checkbox"
                      id="show-pass"
                      onClick={(el) => {
                        showPassword(el);
                      }}
                    />
                    <label for="show-pass">Показать пароль</label>
                  </div>
                </div>
                <div className="button-container">
                  <button
                    className="login-btn"
                    onClick={() => {
                      SetLogin();
                    }}
                  >
                    войти
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      );
    } else if (type == "register") {
      return (
        <>
          <div className="register" id="box">
            <div className="form">
              {(() => {
                if (width <= 723 && width >= 250) {
                  return <div className="line"></div>;
                } else {
                  return (
                    <div
                      className="close-login"
                      onClick={(el) => {
                        setIsShow(false);
                      }}
                    >
                      <img
                        src={require("../static-img/close-filter.png")}
                        alt=""
                        srcset=""
                      />
                    </div>
                  );
                }
              })()}

              <div className="header">
                <div className="sing-in">Зарегистрироваться</div>
                <div
                  className="log-in"
                  onClick={() => {
                    setType("login");
                  }}
                >
                  Вход
                </div>
              </div>
              <form
                id="myForm"
                onSubmit={(el) => {
                  el.preventDefault();
                }}
                autoSave="true"
              >
                <div className="input-container">
                  <label>Имя</label>
                  <input
                    type="text"
                    name="gmail"
                    id="input"
                    autoSave="true"
                    defaultValue={mail}
                    onChange={(el) => {
                      setMail(el.target.value);
                    }}
                    required
                    placeholder="ivano@gmail.com"
                  />
                </div>

                <div className="input-container">
                  <label>Почта</label>
                  <input
                    type="text"
                    name="gmail"
                    id="input"
                    autoSave="true"
                    defaultValue={mail}
                    onChange={(el) => {
                      setMail(el.target.value);
                    }}
                    required
                    placeholder="ivano@gmail.com"
                  />
                </div>
                <div className="input-container">
                  <label>Пароль</label>
                  <input
                    type="password"
                    id="password"
                    autoSave="true"
                    name="password"
                    defaultValue={password}
                    onChange={(el) => {
                      setPassword(el.target.value);
                    }}
                    required
                  />
                  <div className="checkbox">
                    <input
                      className="custom-checkbox"
                      type="checkbox"
                      id="show-pass"
                      autoComplete="new-password"
                      onClick={(el) => {
                        showPassword(el);
                      }}
                    />
                    <label for="show-pass">Показать пароль</label>
                  </div>
                </div>

                <div className="input-container promo">
                  <label>
                    {" "}
                    <div
                      className="question-login-promo"
                      title="Если вас пригласил друг"
                    >
                      <svg
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />

                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0.877075 7.49972C0.877075 3.84204 3.84222 0.876892 7.49991 0.876892C11.1576 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1576 14.1226 7.49991 14.1226C3.84222 14.1226 0.877075 11.1574 0.877075 7.49972ZM7.49991 1.82689C4.36689 1.82689 1.82708 4.36671 1.82708 7.49972C1.82708 10.6327 4.36689 13.1726 7.49991 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49991 1.82689ZM8.24993 10.5C8.24993 10.9142 7.91414 11.25 7.49993 11.25C7.08571 11.25 6.74993 10.9142 6.74993 10.5C6.74993 10.0858 7.08571 9.75 7.49993 9.75C7.91414 9.75 8.24993 10.0858 8.24993 10.5ZM6.05003 6.25C6.05003 5.57211 6.63511 4.925 7.50003 4.925C8.36496 4.925 8.95003 5.57211 8.95003 6.25C8.95003 6.74118 8.68002 6.99212 8.21447 7.27494C8.16251 7.30651 8.10258 7.34131 8.03847 7.37854L8.03841 7.37858C7.85521 7.48497 7.63788 7.61119 7.47449 7.73849C7.23214 7.92732 6.95003 8.23198 6.95003 8.7C6.95004 9.00376 7.19628 9.25 7.50004 9.25C7.8024 9.25 8.04778 9.00601 8.05002 8.70417L8.05056 8.7033C8.05924 8.6896 8.08493 8.65735 8.15058 8.6062C8.25207 8.52712 8.36508 8.46163 8.51567 8.37436L8.51571 8.37433C8.59422 8.32883 8.68296 8.27741 8.78559 8.21506C9.32004 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93511 3.825 7.50003 3.825C6.06496 3.825 4.95003 4.92789 4.95003 6.25C4.95003 6.55376 5.19628 6.8 5.50003 6.8C5.80379 6.8 6.05003 6.55376 6.05003 6.25Z"
                            fill="#000000"
                          />{" "}
                        </g>
                      </svg>
                    </div>
                  </label>
                  <input
                    type="text"
                    className="input-promo"
                    name="promo"
                    minLength={6}
                    translate="no"
                    maxLength={6}
                    id="input"
                    placeholder="Промокод"
                    defaultValue={promo}
                    onChange={(el) => {
                      setPromo(el.target.value);
                    }}
                    autoSave="true"
                    autoComplete={"promo"}
                  />
                </div>

                <div className="button-container">
                  <div
                    className="login-btn"
                    onClick={() => {
                      console.log(mail, password);
                    }}
                  >
                    Зарегистрироваться
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Login;
