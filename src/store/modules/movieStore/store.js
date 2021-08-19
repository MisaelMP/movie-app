import { reject } from 'bluebird';
import MovieService from '../../../services/MovieService';
import Constants from '../constants';

const state = {
  movie: {}
};

const getters = {
  getMovie: (state) => {
    return state.movie;
  },
};

const actions = {
  LOAD_MOVIE({ commit }, payload) {
    MovieService.getSingleMovie(payload)
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
  SET_MOVIE(state, payload) {
    state.movie = payload;
  }
};

export const movieStore = {
  state,
  getters,
  actions,
  mutations,
};
