import { reject } from 'bluebird';
import MoviesServices from '../../../services/MoviesServices';
import Constants from '../constants';

const state = {
	movies: {
		moviesPagination: {},
		currentPage: 0,
	},
	movie: {},
};

const getters = {
	getMoviesPagination: (state) => {
		return state.movies.moviesPagination;
	},
	getCurrentPage: (state) => {
		return state.movies.currentPage;
	},
	getMovie: (state) => {
		return state.movie;
	},
};

const actions = {
	LOAD_MOVIES_PAGINATION({ commit }, payload) {
		MoviesServices.getMovies(payload)
			.then((response) => {
				commit(Constants.MUTATIONS.SET_MOVIES_PAGINATION, response.data);
			})
			.catch((error) => {
				reject(error);
				console.log(error);
			});
	},
	LOAD_MOVIE({ commit }, payload) {
		MoviesServices.getSingleMovie(payload)
			.then((response) => {
				commit(Constants.MUTATIONS.SET_MOVIE, response.data);
			})
			.catch((error) => {
				reject(error);
				console.log(error);
			});
	},
};

const mutations = {
  SET_MOVIES_PAGINATION(state, payload) {
    state.movies.moviesPagination = payload;
  },
  SET_CURRENT_PAGE(state, payload) {
    state.movies.currentPage = payload
  },
   SET_MOVIE(state, payload) {
    state.movie = payload;
  }
}

export const moviesStore =  {
  state,
  getters,
  actions,
  mutations,
};