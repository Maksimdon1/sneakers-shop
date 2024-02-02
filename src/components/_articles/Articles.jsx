import {useState, useEffect} from 'react'
import axios from 'axios'

export default function Articles() {
	const [Article, SetArticle] = useState()
	const [IsLoaded, SetIsLoaded] = useState()
	const id = 1
	  const configs = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		useEffect(() => {
		axios
			.get("https://mains-h5w5.onrender.com/server/api/get-article", { id: id }, configs)
			.then((response) => {
				console.log(response.request.response);

				SetArticle(JSON.parse(response.request.response));
			})
			.catch(function (error) {
				console.log(error.request.response);
			});
		}, []);

	  
         
    
	
	return (
		<>
			{Article ? (
				<>
					<code dangerouslySetInnerHTML={{ __html: Article.Code }}>{}</code>
				</>
			) : (
				<></>
			)}
		</>
	);
}
