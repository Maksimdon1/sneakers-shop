
import "../../style/user-pages/user.css";
import {  Link  , useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout, sendActivationMail } from "../../store/actions";
import ConfirmEmail from "../alert-components/ConfirmEmail";


export function User({data}) {

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





    return (
      <>
      

        <div className="user">
          {(() => {

              return (
                <>
                {!data.SysLevel ?  (<><ConfirmEmail data={data}/></>) : (<></>) }
                  <div className="small-panel">
                    <div className="info">
                      <div className="welcome-event">
                        <h1>Привет,</h1> <h2>{data.Name} !</h2>
                      </div>
                    
                      {!data.SysLevel ?  (<div className="mail confirmed">{data.Email}</div>): (<div className="mail active">{data.Email}</div>) }
                      
                      {data.Phone &&  (   <div className="phone">{data.Phone}</div>)}
                     
                  
                   
                    </div>
                    <Link to="/user/info?show=edit">
                    <div className="edit">
                      <img
                        src={
                          require("../../static-img/svg/pencil-button-svgrepo-com.svg")
                            .default
                        }
                        alt=""
                        srcset=""
                      />
                    </div>
                     </Link>
                  </div>
                  <div className="big-panel">
                  {!data.SysLevel &&  (   <div className="sendActivationMail" onClick={()=>[dispatch(sendActivationMail(data.Email))]}>Подтвердить почту</div>)}
                  <div className="info-link">
                      <div className="circle">
                        <span></span>
                      </div>
                      <div className="icon">
                      <img
                        src={
                          require("../../static-img/svg/percent-2-svgrepo-com.svg")
                            .default
                        }
                        alt=""
                        srcset=""
                      />
                      </div>
                      <div className="text">Достижения и экономия</div>
                      <div className="arrow">
                        <img
                          src={
                            require("../../static-img/svg/arrow-sm-right-svgrepo-com.svg")
                              .default
                          }
                          alt=""
                          srcset=""
                        />
                      </div>
                    </div>
                    <div className="promocodes-bonuses">
                    <Link to="/user/info?show=promocodes">
                      <div className="promocodes">
                        <div className="promo-icon">
                          <img
                            src={
                              require("../../static-img/svg/present-svgrepo-com.svg")
                                .default
                            }
                            alt=""
                            srcset=""
                          />
                        </div>
                        <div className="promocodes-title">Промокоды</div>
                      </div>
                      </Link>
                      <Link to="/user/info?show=bonuses">
                      <div className="bonuses">
                        <div className="bonuses-icon">
                          {data.Bonuses} &#x20bd;
                        </div>
                        <div className="bonuses-title">Баллы</div>
                      </div>
                      </Link>
                    </div>
                    <div className="links">
                    {links.map((el) => (
                      <Link to={`/user/info?show=${el.Link}`}>
                    <div className="info-link-map">
                      <div className="circle">
                        <span></span>
                      </div>
                    
                      <div className="text">{el.Title}</div>
                      <div className="arrow">
                        <img
                          src={
                            require("../../static-img/svg/arrow-sm-right-svgrepo-com.svg").default
                          }
                          alt=""
                          srcset=""
                        />
                      </div>
                    </div>
                    </Link>
                    ))}
                        {data.Status == 'Admin' &&  ( 

                    <Link to={`/user/info?show=money`}>
                    <div className="info-link-map">
                      <div className="circle">
                        <span></span>
                      </div>
                    
                      <div className="text">Прибыль</div>
                      <div className="arrow">
                        <img
                          src={
                            require("../../static-img/svg/arrow-sm-right-svgrepo-com.svg").default
                          }
                          alt=""
                          srcset=""
                        />
                      </div>
                    </div>
                    </Link>
                  )}
                    </div>
                  </div>

                  <div className="logout"onClick={()=>[dispatch(logout()),	localStorage.removeItem('userInfo'),  navigate('/')]}>
                          выйти
                  </div>
                </>
              );
            
          })()}
        </div>
      </>
    );
  

}
