import "./App.css";
import { User } from "./components/user";
import { Home } from "./components/home";
import { Header } from "./components/header.jsx";
import BottomHeader from "./components/BottomHeader";
import { Basket } from "./components/basket";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./components/NotFound";
import DopUserPages from "./components/dopUserPages";
import Test from "./components/TEST/Test.jsx";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import House from "./components/TEST/house";
import * as types from "./store/types";
import { useDispatch, useSelector } from "react-redux";
import { getNewAccessToken } from "./store/actions";
import Camera from "./components/TEST/camera/camera";
import Sneakers from "./components/Sneakers";
import SneakersProduct from "./components/SneakersProduct";
import SearchPage from "./components/SearchPage";
import Login from "./components/_authentication/Login";
import Registration from "./components/_authentication/Registration";
import Chat from "./components/_chat/Chat";
import { useEffect } from "react";
import Articles from "./components/_articles/Articles";
import SaveUp from "./components/TEST/SaveUp";


function App() {
  const dispatch = useDispatch();

  const alert = useSelector((state) => state.AlertReducer);
  console.log(alert)
  if (alert.state) {

    if(alert.type === 'error'){
      document.querySelector('meta[name="theme-color"]').setAttribute("content", 'red');
    }
    if(alert.type === 'success'){
      document.querySelector('meta[name="theme-color"]').setAttribute("content", '#16AF05');
    }
    closeAlert();
    
  }
  function closeAlert() {
    setTimeout(function () {
      dispatch({
        type: types.CLOSE_ALERT,
        payload: {},
      });
      document.querySelector('meta[name="theme-color"]').setAttribute("content", '#FFF');
    }, 3500);
  }
  const data = useSelector((state) => state.userLogin);

  if (data.accessToken && !data.userInfo) {
    dispatch(getNewAccessToken());
  }
  const path = useSelector(
		state => state.PathReducer
	)
  useEffect(() => {
    console.log(path)
    document.title = path.MainPath
  }, [path]);
  return (
    <>
      {alert.state && (
        <div className={"alert " + alert.type}>
          {alert.type === "error" && <strong>Ошибка!</strong>}

          {alert.text}
          <div
            className="close-alert"
            onClick={() => [
              dispatch({
                type: types.CLOSE_ALERT,
                payload: {},
              }),
            ]}
          >
            <img
              src={require("./static-img/svg/close-svgrepo-com.svg").default}
              alt=""
              srcset=""
            />
          </div>
        </div>
      )}

      <Routes>
        {/* <Route path="/camera" element={ <><Camera /></> } /> */}
        
      
        <Route path="/search" element={ <><Header /> <SearchPage />	<BottomHeader /></>} />
        <Route path="/" element={<><Header /><Home />	<BottomHeader /></>} />
        <Route path="/house" element={ <><Header /> <House /><BottomHeader /></>} />
        <Route path="/test" element={ <><Header /> <Test /><BottomHeader /></>} />
        <Route path="/user" element={ <><Header /> <User /><BottomHeader /></>}/>

        <Route path="/product/sneakers/:url" element={ <> <SneakersProduct /><BottomHeader /></>} />
        <Route path="/catalog" element= { <><Header /> <Sneakers  /><BottomHeader /></>}/>
        <Route path="/basket" element={ <><Header /> <Basket /></>} /> {/*<BottomHeader />*/}
        <Route path="/user/info" element={ <><Header /> <DopUserPages /></>} />
        <Route path="/login" element={ <><Header /> <Login /></>} />
        <Route path="/registration" element={ <><Header /> <Registration /></>} />
        <Route path="/chat" element={ <><Header /> <Chat /><BottomHeader /></>}/>
        <Route path="/article/:id" element={<><Header /><Articles/> 	<BottomHeader /></>}/>
        
        <Route path="*" element={ <><Header /> <NotFound /><BottomHeader /></>} />
        <Route path="/savings" element={ <><Header /> <SaveUp /><BottomHeader /></>} />
        {/* <Route path="*" element={<Navigate to="/" /> <><Camera /></>}/> */}
      </Routes>

      
    </>
  );
}

export default App;
