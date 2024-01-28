import React, { useEffect } from "react";
import "../style/home.css";
import { Swipers } from "./swipes";
import { Slider } from "./slider";
import Login from "./login";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../store/types";
import DefaultButton from "./_microComponents/DefaultButton";
export function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({
			type: types.SET_MAIN_PATH,
			payload: "home",
		});
	}, []);

	return (
		<>
			<div className="home">
				<div className="hello-img">
					<img src={require("../static-img/articles/retro.jpg")} width={"100%"} alt="" />
					<Link to={"/article"}>
						<div className="button">Перейти</div>
					</Link>
				</div>
				<div className="container-2">
					<div className="title">Что вас интересует ?</div>
					<div className="blocks">
						<div className="item">
							<img src={require("../static-img/box/jacket.jpg")} alt="" /> <div className="title">куртки</div>
						</div>
						<div className="item">
							<img src={require("../static-img/box/sneakers.jpg")} alt="" /> <div className="title">обувь</div>
						</div>
						<div className="item">
							<img src={require("../static-img/box/hoodies.jpg")} alt="" /> <div className="title">худи</div>
						</div>
						<div className="item">
							<img src={require("../static-img/box/t-shirt.jpg")} alt="" /> <div className="title">футболки</div>
						</div>
					</div>
				</div>
				<div className="container-3">
					<div className="title">Бренды</div>
					<div className="scroll-component">
						<div className="item">
							<img src={require("../static-img/box/adidas.svg").default} alt="" />
						</div>
						<div className="item">
							<img src={require("../static-img/box/asics.svg").default} alt="" />
						</div>
						<div className="item">
							<img src={require("../static-img/box/new-balance.svg").default} alt="" />
						</div>
						<div className="item">
							<img src={require("../static-img/box/nike.svg").default} alt="" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
