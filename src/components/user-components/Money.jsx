import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { outNum } from "../functions/NumsCount.jsx";
import "../../style/user-components/money.scss";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.font.size = 15.5;
export default function Money() {
	useEffect(() => {
		outNum(14000, "count-1");
	}, []);
	const payments = [
		{ type: "replenishment", value: 5000, owner: "Максим К.", date: "Sat Feb 03 2024 17:11:32 GMT+0300 (Moscow Standard Time)" },
		{ type: "replenishment", value: 4000, owner: "Максим К.", date: "Sat Feb 03 2024 17:11:32 GMT+0300 (Moscow Standard Time)" },
		{ type: "withdraw", value: 4000, owner: "Максим К.", date: "Sat Feb 03 2024 17:11:32 GMT+0300 (Moscow Standard Time)" },
		{ type: "replenishment", value: 4000, owner: "Максим К.", date: "Sat Feb 03 2024 17:11:32 GMT+0300 (Moscow Standard Time)" },
		{ type: "profit", value: 4000, owner: "Максим К.", date: "Sat Feb 03 2024 17:11:32 GMT+0300 (Moscow Standard Time)" },
	];

	const dispatch = useDispatch();
	let navigate = useNavigate();

	const datas = useSelector((state) => state.userLogin);
	console.log(datas);
	const data = {
		labels: ["Максим", "Матвей"],
		datasets: [
			{
				label: "Доля денег",
				data: [12250, 1750],
				backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
				borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
				borderWidth: 1,
			},
		],
	};

	return (
		<>
			<div className="money__box">
				<div className="pie">
					<Pie options={{}} data={data} />
				</div>
				<div className="title">
					Баланс фирмы <span id="count-1">13000</span> <span>&#x20bd; </span>{" "}
				</div>
				<div className="payments">
					<div className="title">Платежи</div>

					<div className="history">
						{payments.map((el) => {
							return (
								<>
									{el.type === "profit" && (
										<>
											<div className={"item " + el.type}>
												<div className="icon">
													<img src={require("../../static-img/money/replenishment.svg").default} alt="" srcset="" />
												</div>
												<div className="info">
													<div className="value">
														<span>+</span>
														{el.value}
													</div>
												</div>
												<div className="date">{Intl.DateTimeFormat("ru-RU",{ dateStyle: 'short'} ).format(new Date(el.date))}</div>
											</div>
										</>
									)}
									{el.type !== "profit" && (
										<>
											<div className={"item " + el.type}>
												<div className="icon">
													<img src={require(`../../static-img/money/${el.type}.svg`)} alt="" srcset="" />
												</div>
												<div className="info">
													<div className="owner">{el.owner}</div>
													<div className="value">{el.value}</div>
												</div>
												<div className="date" onClick={()=>{document.getElementById('5').requestFullscreen()}} id="5">{Intl.DateTimeFormat("ru-RU",{ dateStyle: 'short'} ).format(new Date(el.date))}</div>
											</div>
										</>
									)}
								</>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}
