import { useEffect, useState } from "react";
import "../style/user.css";
import * as types from "../store/types";
import LoadingUser from "./user-page-components/loading";
import { Success } from "./user-page-components/Success";
import { useDispatch, useSelector } from "react-redux";
import { getNewAccessToken } from "../store/actions";
import { useNavigate } from "react-router-dom";

export function User() {
	const [ShowLogin, SetShowLogin] = useState();
	const dispatch = useDispatch();
	let navigate = useNavigate();

	const data = useSelector((state) => state.userLogin);

	useEffect(() => {
		dispatch({
			type: types.SET_MAIN_PATH,
			payload: "user",
		});
	}, []);

	useEffect(() => {
		if (data.accessToken && data.userInfo) {
			dispatch(getNewAccessToken());
		}
	}, []);

	//  todo add loading effect
	// if (data.loading) {
	// 	return (
	// 		<>
	// 			<span class="loader"></span>
	// 		</>
	// 	);
	// }

	if (data.userInfo) {
		return <Success data={data.userInfo} />;
	}
	console.log(data);
	// if (data.loading) {
	//   return <LoadingUser/>
	// }
	if (!data.accessToken) {
		dispatch(getNewAccessToken());
		console.log(data);
		setTimeout(function () {
			console.log("eroor exexexexe");
			navigate("/login");
		}, 2500);
	}
}
