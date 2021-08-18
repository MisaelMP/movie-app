import MainService from './MainService';

export default {
	getSingleMovie(id) {
		return MainService.get(
			`?apikey=${import.meta.env.VITE_API_KEY}&i=${id}&plot=full`
		);
	},
};
