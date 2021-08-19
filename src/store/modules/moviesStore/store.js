import { reject } from 'bluebird';
import MoviesServices from '../../../services/MoviesServices';
import Constants from '../constants';

const state = {
  movies: {
    moviesPagination: {},
    currentPage: 0,
  },
};

const getters = {
  getMoviesPagination: (state) => {
    return state.movies.moviesPagination;
  },
  getCurrentPage: (state) => {
    return state.movies.currentPage;
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
};

const mutations = {
  SET_MOVIES_PAGINATION(state, payload) {
    state.movies.moviesPagination = payload;
  },
  SET_CURRENT_PAGE(state, payload) {
    state.movies.currentPage = payload
  }
}

export const moviesStore =  {
  state,
  getters,
  actions,
  mutations,
};