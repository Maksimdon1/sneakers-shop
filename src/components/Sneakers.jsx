import { useState, useEffect } from "react";
import "../style/katalog.scss";
import Login from "./login";
import { Link } from "react-router-dom";
import { InfoComponents } from "./infoComponents";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import BottomPanel from "./BottomPanel";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../store/types";
import List from "./_catalog/List";
import Table from "./_catalog/Table";

export default function Sneakers() {
  const [sneakers, SetSneakers] = useState(data);
  const [pageYOffset, SetpageYOffset] = useState(
    localStorage.getItem("pageYOffset"),
  );
  const [ShowBottomPanel, SetShowBottomPanel] = useState(false);
  const [ShowBottomPanelData, SetShowBottomPanelData] = useState();
  const [ShowType, SetShowType] = useState("table");

  const dispatch = useDispatch();
  const path = useSelector((state) => state.PathReducer);


  useEffect(() => {
    SetSneakers(data);

    dispatch({
      type: types.PATH_NEW,
      payload: [
        { path: "/", title: "главная" },
        { path: "/catalog", title: "каталог" },
      ],
    });

    dispatch({
      type: types.SET_MAIN_PATH,
      payload: "catalog",
    });
  }, []);

  function voidBottomPanel(props) {
    if (!ShowBottomPanel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    SetShowBottomPanel(!ShowBottomPanel);
    SetShowBottomPanelData(props);
  }

  function data() {
    if (JSON.parse(localStorage.getItem("like")) == null) {
      localStorage.setItem("like", JSON.stringify([]));
    }

    let arr = [];

    const liked = JSON.parse(localStorage.getItem("like"));

    require("../sneakers.json").goods.forEach((element) => {
      if (liked.includes(element["unique_code"])) {
        element.like = true;
      } else {
        element.like = false;
      }
      arr.push(element);
    });

    return arr;
  }

  function add_To_Like(id) {
    console.log(sneakers);
    console.log(id);

    // localStorage.setItem('like',JSON.stringify([]) )

    function addToLocal(url) {
      const list_like = JSON.parse(localStorage.getItem("like"));
      if (list_like == null) {
        localStorage.setItem("like", JSON.stringify([]));
        list_like = JSON.parse(localStorage.getItem("like"));
      }

      if (list_like.includes(url)) {
        list_like.splice(list_like.indexOf(url), 1);
      } else {
        list_like.push(url);
      }

      localStorage.setItem("like", JSON.stringify(list_like));
    }

    let arr = sneakers;

    arr.map((el) => {
      if (el.unique_code === id) {
        el.like = !el.like;
        addToLocal(el["unique_code"]);
        gsap.from(`#like-${el.Id} `, {
          duration: 2,
          scale: 0.5,
          opacity: 0.3,

          stagger: 0.1,
          ease: "elastic",
          force3D: true,
        });
      }
      return el;
    });
    console.log(id);

    SetSneakers(data);
  }

  const showImage = () => {
    // document.getElementById("katalog-all").style.display = "grid"
  };
  const change = (id) => {
    const el = document.getElementById(id);
    el.style.display = "flex";
  };

  return (
    <>
      <div className="path">
        {path.path ? (
          path.path.map((el) => {
            return (
              <>
                <Link to={el.path}>
                  <div className="el">
                    {el.title} <div className=""> {">"} </div>
                  </div>
                </Link>
              </>
            );
          })
        ) : (
          <></>
        )}
      </div>
      {ShowBottomPanel && (
        <div
          onTouchMove={(el) => {
            voidBottomPanel();
          }}
        >
          <BottomPanel params={ShowBottomPanelData} />
        </div>
      )}
      {/* <Login type={'login'}/> */}
      <div className="katalog">
        <div className="show-type">
          <div className="title">Каталог</div>
          <div className="icon">
            {ShowType === "table" && (
              <>
                <img
                  onClick={(el) => {
                    SetShowType("list");
                  }}
                  src={
                    require("../static-img/svg/four-squares-list-svgrepo-com.svg")
                      .default
                  }
                  alt=""
                  srcset=""
                />
              </>
            )}
            {ShowType === "list" && (
              <>
                <img
                  onClick={(el) => {
                    SetShowType("table");
                  }}
                  src={
                    require("../static-img/svg/list-ul-alt-svgrepo-com.svg")
                      .default
                  }
                  style={{ width: "26px" }}
                  alt=""
                  srcset=""
                />
              </>
            )}
          </div>
        </div>
        {ShowType === "list" && (
          <>
            <List />
          </>
        )}
        {ShowType === "table" && (
          <>
            <Table />
          </>
        )}
      </div>
    </>
  );
}