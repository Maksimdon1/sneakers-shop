import axios from '../api/axios'
import * as types from './types'
import { useQuery } from "react-query";

const login = (email, password) => async dispatch => {

	let el = []




	try {





		dispatch({
			type: types.USER_LOGIN_REQUEST,
		})

		const configs = {
			headers: {
				'Content-Type': 'application/json',
			},
		}

		// const { data, status, headers, statusText,  request, config } = 
		await axios.post(
			'/login',
			{ email, password },
			configs
		).then(response => {
			console.log(response)
			localStorage.setItem('userInfo', JSON.stringify(response.data.token.refreshToken))
			dispatch({
				type: types.USER_LOGIN_SUCCESS,
				payload: response.data
			})
			 dispatch({
				type: types.ALERT_SUCCESS,
				payload: {
					text: 'Успешно авторизован'
				}
				
		
			})
		})
		.catch(function (error) {
			console.log()
			if (error) {
				dispatch({
					type: types.USER_LOGIN_FAIL,
					payload:
						{
							text : error.response.data.message, state: true, code: error.status
						}
				})
				dispatch({
					type: types.ALERT_ERROR,
					payload: {
						text : error.response.data.message
					}
			
				})
			  // The request was made and the server responded with a status code
			  // that falls out of the range of 2xx
			  console.log(error.response.data.message);
		
			}
			//  else if (error.request) {
			//   // The request was made but no response was received
			//   // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
			//   // http.ClientRequest in node.js
			//   console.log(error.request);
			// } else {
			//   // Something happened in setting up the request that triggered an Error
			//   console.log('Error', error.message);
			// }
	
		  });
				



		
		// console.log(el)





	} catch (error) {
	
	}

}

export const getNewAccessToken = () => async dispatch => {
	if(localStorage.getItem('userInfo')){
	//	const { data, status, headers, statusText,  request, config } = 

await axios.post('/refresh',
		{'refreshToken': localStorage.getItem('userInfo').replace(/"/g, '')}
	)
	.then((response) => {
		
        // Handle a successful response
		if(response.status === 200){


		dispatch({
									type: types.USER_LOGIN_SUCCESS,
									payload: {
										token:{
											accessToken : response.data.accessToken,
											refreshToken : response.data.refreshToken
										},
										user:response.data.user
									},
								})
			// dispatch({
			// 	type: types.ALERT_SUCCESS,
			// 	payload: {
					
			// 		text: 'Успешно вошли в аккаунт'
			// 	}})
		localStorage.setItem('userInfo', JSON.stringify(response.data.refreshToken))
		}

		if(response.status === 401){
			 console.log(response)

			dispatch({
				type: types.USER_REGISTER_FAIL,
				payload: response.data,
			})

			localStorage.setItem('userInfo', JSON.stringify(response.data.refreshToken))
			}
    })
    .catch((error) => {
        if (error === 'Unauthorized') {
            // Handle the unauthorized error (e.g., show an error message)
            console.log('Unauthorized. Please log in.');
        } else {
            // Handle other errors here
            console.error('An error occurred:', error);
        }
    });

	

			}
					
}

export const sendActivationMail = (mail)=> async dispatch => {
	try {





		dispatch({
			type: types.USER_LOGIN_REQUEST,
		})

		const configs = {
			headers: {
				'Content-Type': 'application/json',
			},
		}

		// const { data, status, headers, statusText,  request, config } = 
		await axios.post(
			'/sendActivationMail',
			 {
				"email": mail
			} ,
			configs
		).then(response => {
			console.log(response)
		
		
			 dispatch({
				type: types.ALERT_SUCCESS,
				payload: {
					text: 'Успешно отправлено'
				}
				
		
			})
		})
		.catch(function (error) {
			console.log(error)
			if (error) {
			
				dispatch({
					type: types.ALERT_ERROR,
					payload: {
						text : error.response.data.message
					}
			
				})
			  // The request was made and the server responded with a status code
			  // that falls out of the range of 2xx
			  console.log(error.response.data.message);
		
			}
			//  else if (error.request) {
			//   // The request was made but no response was received
			//   // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
			//   // http.ClientRequest in node.js
			//   console.log(error.request);
			// } else {
			//   // Something happened in setting up the request that triggered an Error
			//   console.log('Error', error.message);
			// }
	
		  });
				



		
		// console.log(el)





	} catch (error) {
	
	}

}
export const logout = () => async dispatch =>  {

	
// 	await axios.post(
// 		'/logout',
 
// 		{'Content-Type': 'application/json'},
// 	{'refreshToken': localStorage.getItem('userInfo').replace(/"/g, '')}
// )



	dispatch({
		type: types.USER_LOGOUT,
		playload: [],

	})
	dispatch({
		type: types.ALERT_INFO,
		payload: {
			text: 'Успешно вышли из аккаунта'
		}
		

	})
	
}

export const register = dataInput => async dispatch => {
	try {
		dispatch({
			type: types.USER_REGISTER_REQUEST,
		})

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}

		const { data } = await axios.post('register', dataInput, config)

		dispatch({
			type: types.USER_REGISTER_SUCCESS,
			payload: data,
		})

		dispatch({
			type: types.USER_LOGIN_SUCCESS,
			payload: data,
		})

		localStorage.setItem('userInfo', JSON.stringify(data.userInfo))
	} catch (error) {
		dispatch({
			type: types.USER_REGISTER_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}










// export const trys = () => async dispatch =>  {

// 	axios.post('/login')
//   .catch(function (error) {
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       console.log(error.response.data.message);

// 	}
//     //  else if (error.request) {
//     //   // The request was made but no response was received
//     //   // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//     //   // http.ClientRequest in node.js
//     //   console.log(error.request);
//     // } else {
//     //   // Something happened in setting up the request that triggered an Error
//     //   console.log('Error', error.message);
//     // }
//     console.log(error.config);
//   });
		
// 	}

export default login

















































































// import axios from '../api/axios'
// import * as types from './types'

// const login = (email, password) => async dispatch => {
// 	try {
// 		dispatch({
// 			type: types.USER_LOGIN_REQUEST,
// 		})

// 		const configs = {
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 		}

// 		const { data, status, headers, statusText,  request, config } = await axios.post(
// 			'/login',
// 			{ email, password },
// 			configs
// 		)
// 		console.log(data)


// 		dispatch({
// 			type: types.USER_LOGIN_SUCCESS,
// 			payload: data,
// 		})


// 		localStorage.setItem('userInfo', JSON.stringify(data.token.refreshToken))
// 	} catch (error) {
// 		console.log(error)
// 		dispatch({
// 			type: types.USER_LOGIN_FAIL,
// 			payload:
// 				{
// 					text : error.message, state: true, code: error.status
// 				}
// 		})
// 	}
// }

// export const getNewAccessToken = () => async dispatch => {
// 	if(localStorage.getItem('userInfo')){
















// 	try {
// 		dispatch({
// 			type: types.USER_LOGIN_REQUEST,
// 		})

// 		const configs = {
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 		}

// 		const { data, status, headers, statusText,  request, config } = await axios.post('/refresh',
// 		{'refreshToken': localStorage.getItem('userInfo').replace(/"/g, '')}, configs
// 	)
// 		console.log(data)
// 		if(status === 200){


// 		dispatch({
// 			type: types.USER_LOGIN_SUCCESS,
// 			payload: data,
// 		})


// 		localStorage.setItem('userInfo', JSON.stringify(data.token.refreshToken))
// 	}else{
// 		dispatch({
// 			type: types.USER_LOGIN_FAIL,
// 			payload:
// 				{
// 					text : data.message, state: true, code: status
// 				}
// 		})
// 	}
// 	} catch (error) {
// 		console.log(error.message)
// 		dispatch({
// 			type: types.USER_LOGIN_FAIL,
// 			payload:
// 				{
// 					text : error.message, state: true, code: 401
// 				}
// 		})
// 	}




















// 			}
					
// }

// export const logout = () => async dispatch =>  {
// 	console.log(localStorage.getItem('userInfo').replace(/"/g, ''))
	
// 	await axios.post(
// 		'/logout',
 
// 		{'Content-Type': 'application/json'},
// 	{'refreshToken': localStorage.getItem('userInfo').replace(/"/g, '')}
// )

  
// 	console.log('logout')


// 	dispatch({
// 		type: types.USER_LOGOUT,
// 		playload: [],

// 	})
	
// }

// export const register = dataInput => async dispatch => {
// 	try {
// 		dispatch({
// 			type: types.USER_REGISTER_REQUEST,
// 		})

// 		const config = {
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 		}

// 		const { data } = await axios.post('register', dataInput, config)

// 		dispatch({
// 			type: types.USER_REGISTER_SUCCESS,
// 			payload: data,
// 		})

// 		dispatch({
// 			type: types.USER_LOGIN_SUCCESS,
// 			payload: data,
// 		})

// 		localStorage.setItem('userInfo', JSON.stringify(data.userInfo))
// 	} catch (error) {
// 		dispatch({
// 			type: types.USER_REGISTER_FAIL,
// 			payload:
// 				error.response && error.response.data.message
// 					? error.response.data.message
// 					: error.message,
// 		})
// 	}
// }

// export default login
