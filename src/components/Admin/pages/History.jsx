import {useEffect, useState} from 'react'
import axios from "../../../api/axios";
export default function History() {
	const [Payments, SetPayments] = useState([]);

	const configs = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	useEffect(() => {
		axios
			.post("/admin/get-payments", configs)
			.then((response) => {
				const data = JSON.parse(response.request.response)
				
				let arr = []
				for (let i = 0; i < data['Result'].length; i++) {
					console.log(data['Result'][i])
					arr.push(data['Result'][i])
				}
				SetPayments(arr);
			

				
			})
			.catch(function (error) {
				console.log(error.request.response);
			});
	}, []);
	// const payments = [
	// 	{ type: "replenishment", value: 5000, owner: "Максим К.", date: "Sat Feb 03 2024 17:11:32 GMT+0300 (Moscow Standard Time)" },
	// 	{ type: "replenishment", value: 4000, owner: "Максим К.", date: "Sat Feb 03 2024 17:11:32 GMT+0300 (Moscow Standard Time)" },
	// 	{ type: "withdraw", value: 4000, owner: "Максим К.", date: "Sat Feb 03 2024 17:11:32 GMT+0300 (Moscow Standard Time)" },
	// 	{ type: "replenishment", value: 4000, owner: "Максим К.", date: "Sat Feb 03 2024 17:11:32 GMT+0300 (Moscow Standard Time)" },
	// 	{ type: "profit", value: 4000, owner: "Максим К.", date: "Sat Feb 03 2024 17:11:32 GMT+0300 (Moscow Standard Time)" },
	// ];
	return (
		<div className="payments">
		<div className="title">Платежи</div>

		<div className="history">
			{Payments.length !== 0 && (<>
		 {Payments.map((el, key) => {
				return (
					<>
						{el.Type === "profit" && (
							<>
								<div className={"item " + el.Type} key={key}>
									<div className="icon">
										<img src={require("../../../static-img/money/replenishment.svg").default} alt="" srcset="" />
									</div>
									<div className="info">
										<div className="value">
											<span>+</span>
											{el.Value}
										</div>
									</div>
									<div className="date">{Intl.DateTimeFormat("ru-RU",{ dateStyle: 'short'} ).format(new Date(el.date))}</div>
								</div>
							</>
						)}
						{el.type !== "profit" && (
							<>
								<div className={"item " + el.Type} key={key}>
									<div className="icon">
										<img src={require(`../../../static-img/money/${el.Type}.svg`)} alt="" srcset="" />
									</div>
									<div className="info">
										<div className="owner">{el.Name}</div>
										<div className="value">{el.Value}</div>
									</div>
									<div className="date" onClick={()=>{document.getElementById('5').requestFullscreen()}} id="5">{Intl.DateTimeFormat("ru-RU",{ dateStyle: 'short'} ).format(new Date(el.DateCreated))}</div>
								</div>
							</>
						)}
					</>
				);
			})} 
			</>
			)}
		</div>
	</div>
	)
}
