import axios from 'axios';

const baseURL = `${import.meta.env.VITE_ROOT_API}`;
console.log(baseURL);

export default axios.create({
	baseURL,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	},
	withCredentials: false,
});