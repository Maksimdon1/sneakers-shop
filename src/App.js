import "./App.css";
import { User } from "./components/user";
import { Home } from "./components/home";
import { Header } from "./components/header.jsx";
import BottomHeader from "./components/BottomHeader";
import Product from "./components/product";
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

      <Header />
      <Routes>
        <Route path="/camera" element={<Camera />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/house" element={<House />} />
        <Route path="/test" element={<Test />} />
        <Route path="/user" element={<User />} />
        <Route path="/product/:url" element={<Product />} />
        <Route path="/product/sneakers/:url" element={<SneakersProduct />} />
        <Route path="/catalog" element={<Sneakers />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/user/info" element={<DopUserPages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <BottomHeader />
    </>
  );
}

export default App;
