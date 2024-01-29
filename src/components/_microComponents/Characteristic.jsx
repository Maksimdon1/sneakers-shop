import {useEffect} from 'react'
import copy from '../functions/Copy';
import * as types from '../../store/types'
import { useDispatch, useSelector } from "react-redux";

export default function Characteristic({array, defaultOpen}) {
   const dispatch = useDispatch();


	function OpenContainer() {
		if (document.querySelector(".info-container.active")) {
			document.querySelector(".characteristic > .title").classList.remove("active");
			document.querySelector(".characteristic > .info-container").classList.remove("active");
			console.log("not");
		} else {
			document.querySelector(".characteristic > .title").classList.add("active");
			document.querySelector(".info-container").classList.add("active");
			console.log("is");
		}
	}
	useEffect(() => {

		OpenContainer() 
	
	}, [defaultOpen]);
		
	return (
		<div className="characteristic">
			<div
				className="title"
				onClick={() => {
					OpenContainer();
				}}
			>
				О товаре
			</div>
			<div className="info-container">
				<div className="item">
					<div className="title">Бренд</div>
					<div className="value">{array.Brand}</div>
				</div>
				<div className="item">
					<div className="title">Категория</div>
					<div className="value">{array.Kategory}</div>
				</div>
				<div
					className="item"
					onClick={() => [
						copy(array.unique_code), dispatch({
              type: types.ALERT_SUCCESS,
              payload: {
                text: "Успешно скопировано",
              },
            })
					]}
				>
					<div className="title">Артикул</div>{" "}
					<div className="value">
						{array.unique_code}{" "}
						<svg style={{ marginLeft: "5px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
							<path
								stroke="#868695"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.3"
								d="M5 6.5a1.5 1.5 0 0 1 1.5-1.501h6a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 5 12.5v-6Z"
							/>
							<path stroke="#868695" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5" />
						</svg>
					</div>{" "}
				</div>
			</div>
		</div>
	);
}
