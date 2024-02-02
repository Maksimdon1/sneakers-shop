import axios from 'axios'

export default axios.create({
	baseURL: "https://mains-h5w5.onrender.com/server/api", //https://mains-h5w5.onrender.com/server/api    http://192.168.1.4:3002/server/api
	withCredentials: true,
});
