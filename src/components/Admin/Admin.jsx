import "../../style/user-pages/admin.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, sendActivationMail } from "../../store/actions";
import ConfirmEmail from "../alert-components/ConfirmEmail";

export function Admin({ data }) {
	let navigate = useNavigate();
	const dispatch = useDispatch();
	console.log(data);

	const links = [
		{
			Title: "Избранное",
			Link: "favourites",
		},
		{
			Title: "Партнерская программа",
			Link: "referal",
		},
		{
			Title: "Мои заказы",
			Link: "my-orders",
		},
		{
			Title: "Адресса доставки",
			Link: "delivery-ddresses",
		},
		{
			Title: "Про нас",
			Link: "about",
		},
	];

	return (
		<>
			<div className="admin">
				<div className="title">Добрый день, {data.Name}</div>

				<div className="buttons">
					<Link to={`/user/info?show=money`}>
						<div className="info-link-map">
							<div className="title">Прибыль</div>
							<div className="icon">
              <img src={require('./icons/Cash.svg').default} alt="" srcset="" />
							</div>
						</div>
					</Link>
					<Link to={`/user/info?show=history`}>
						<div className="info-link-map">
							<div className="title">История</div>
							<div className="icon">
                  <img src={require('./icons/History.svg').default} alt="" srcset="" />
							</div>
						</div>
					</Link>
					<Link to={`/user/info?show=diagram`}>
						<div className="info-link-map diagram" >
							<div className="title">Статистика</div>
							<div className="icon">
                  <img src={require('./icons/Diagram.svg').default} alt="" srcset="" />
							</div>
						</div>
					</Link>
          
          <Link to={`/user/info?show=box`}>
						<div className="info-link-map box">
							<div className="title">Товары</div>
							<div className="icon">
                  <img src={require('./icons/Box.svg').default} alt="" srcset="" />
							</div>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
}
