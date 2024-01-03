import axios from 'axios'

export default axios.create({
	baseURL: 'http://192.168.1.3:3002/server/api', //https://mains-h5w5.onrender.com/server/api    http://192.168.1.4:3002/server/api
	withCredentials: true,
	
})
