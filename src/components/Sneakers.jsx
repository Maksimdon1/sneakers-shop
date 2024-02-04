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
import DefaultButton from "./_microComponents/DefaultButton";
import FilterBy  from './_catalog/FilterBy.jsx';

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
			{/* <DefaultButton BackgroundColor={"#aaafff"} LinkTo={"name/home"} label={"подпишись"} Width={"80%"} Margin={"5%"} /> */}
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
				{" "}
				<div className="title">Каталог</div>
				<div className="show-type">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M9 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.874 1a4.002 4.002 0 0 1-7.748 0H1a1 1 0 0 1 0-2h2.126a4.002 4.002 0 0 1 7.748 0H21a1 1 0 1 1 0 2H10.874Zm8 8a4.002 4.002 0 0 0-7.748 0H1a1 1 0 1 0 0 2h10.126a4.002 4.002 0 0 0 7.748 0H21a1 1 0 1 0 0-2h-2.126ZM17 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
							fill="#000"
						/>
					</svg>
					<FilterBy />
					{/* <div className="filter-by">
						<div className="custom-select">
							<form id="app-cover">
								<div id="select-box">
									<input type="checkbox" id="options-view-button" />
									<div id="select-button" class="brd">
										<div id="selected-value">
											<span>Select a platform</span>
										</div>
										<div id="chevrons">
											<i class="fas fa-chevron-up"></i>
											<i class="fas fa-chevron-down"></i>
										</div>
									</div>
									<div id="options">
										<div class="option">
											<input class="s-c top" type="radio" name="platform" value="codepen" />
											<input class="s-c bottom" type="radio" name="platform" value="codepen" />
											<i class="fab fa-codepen"></i>
											<span class="label">CodePen</span>
											<span class="opt-val">CodePen</span>
										</div>
										<div class="option">
											<input class="s-c top" type="radio" name="platform" value="dribbble" />
											<input class="s-c bottom" type="radio" name="platform" value="dribbble" />
											<i class="fab fa-dribbble"></i>
											<span class="label">Dribbble</span>
											<span class="opt-val">Dribbble</span>
										</div>
										<div class="option">
											<input class="s-c top" type="radio" name="platform" value="behance" />
											<input class="s-c bottom" type="radio" name="platform" value="behance" />
											<i class="fab fa-behance"></i>
											<span class="label">Behance</span>
											<span class="opt-val">Behance</span>
										</div>
										<div class="option">
											<input class="s-c top" type="radio" name="platform" value="hackerrank" />
											<input class="s-c bottom" type="radio" name="platform" value="hackerrank" />
											<i class="fab fa-hackerrank"></i>
											<span class="label">HackerRank</span>
											<span class="opt-val">HackerRank</span>
										</div>
										<div class="option">
											<input class="s-c top" type="radio" name="platform" value="stackoverflow" />
											<input class="s-c bottom" type="radio" name="platform" value="stackoverflow" />
											<i class="fab fa-stack-overflow"></i>
											<span class="label">StackOverflow</span>
											<span class="opt-val">StackOverflow</span>
										</div>
										<div class="option">
											<input class="s-c top" type="radio" name="platform" value="freecodecamp" />
											<input class="s-c bottom" type="radio" name="platform" value="freecodecamp" />
											<i class="fab fa-free-code-camp"></i>
											<span class="label">FreeCodeCamp</span>
											<span class="opt-val">FreeCodeCamp</span>
										</div>
										<div id="option-bg"></div>
									</div>
								</div>
							</form>
						</div>
					</div> */}
					<div className="icon">
						{ShowType === "table" && (
							<>
								<img
									onClick={(el) => {
										SetShowType("list");
									}}
									src={require("../static-img/svg/four-squares-list-svgrepo-com.svg").default}
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
									src={require("../static-img/svg/list-ul-alt-svgrepo-com.svg").default}
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