import { createStore } from 'vuex';
import { moviesStore } from  './modules/moviesStore/store';

export const store = createStore({
  modules: {
    moviesStore
  }
});
