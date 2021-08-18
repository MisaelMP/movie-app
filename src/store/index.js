import { createStore } from 'vuex';
import { moviesStore } from  './modules/moviesStore/store';
import { movieStore } from  './modules/movieStore/store';

export const store = createStore({
  modules: {
    moviesStore,
    movieStore
  }
});
