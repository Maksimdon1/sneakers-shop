import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import "../../style/article.scss";

export default function Articles() {
	const list = [[2], [2], [2], [1]];
	const { id } = useParams();
	const [Article, SetArticle] = useState();
	const [IsLoaded, SetIsLoaded] = useState();

	const configs = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	useEffect(() => {
		console.log(id);
		axios
			.post("/get-article", { id: id }, configs)
			.then((response) => {
				console.log(JSON.parse(response.request.response));

				SetArticle(JSON.parse(response.request.response));
			})
			.catch(function (error) {
				console.log(error.request.response);
			});
	}, []);

	return (
		<div className="Article">
			{Article ? (
				<>
					<img width={"100%"} height={"auto"} src={`http://192.168.1.4:3002/static/Article/${Article.ArticleImg}`} alt="" srcset="" />
					<div className="title">
						<p>{Article.Title}</p>
					</div>
					<code dangerouslySetInnerHTML={{ __html: Article.Code }}>{}</code>
			
					<div className="date-created">{Intl.DateTimeFormat("ru-RU",{ dateStyle: 'short', timeStyle:'short'} ).format(new Date(Article.DateCreated))}</div>
				</>
			) : (
				<></>
			)}
			<div className="alike">
				<div className="title">Похожие статьи</div>
				<div className="scroll">
					{list.map((el) => {
						return (
							<>
								<div className="item">
									<img height={"auto"} src={`http://192.168.1.4:3002/static/Article/${el}.png`} alt="" srcset="" />
								</div>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
}



