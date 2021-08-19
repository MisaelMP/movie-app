<template>
  <div class="c-home__wrapper">
    <form @submit.prevent="searchMovies()" class="c-home__form">
      <input type="text" v-model="search" class="c-home__form-input" />
      <input type="submit" value="search" class="c-home__form-button" />
    </form>
    <MovieList
      class="c-movie-list"
      v-for="movie in getAllMovies"
      :key="movie.imdbID"
      :movie="movie"
    />
    <div class="c-home__button-wrapper" v-if="getCurrentPage > 0">
      <button @click="loadPreviousMovies" class="c-home__button">
        <ChevronRight class="c-home__button-icon is-left" />
      </button>
      <div class="c-home__counter-wrapper">
        <span class="c-home__counter">Page: {{ getCurrentPage }}</span>
        <div class="c-home__results">{{ getTotalMovies }} Results</div>
      </div>
      <button @click="searchMovies" class="c-home__button">
        <ChevronRight class="c-home__button-icon" />
      </button>
    </div>
  </div>
  <router-view></router-view>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import ChevronRight from "../assets/svg/right-chevron.svg";
import MovieList from "../components/MovieList.vue";

const search = ref("");
const store = useStore();
const loadMovies = (value, page) =>
  store.dispatch("LOAD_MOVIES_PAGINATION", { value, page });
const getAllMovies = computed(() => store.getters.getMoviesPagination.Search);
const getTotalMovies = computed(
  () => store.getters.getMoviesPagination.totalResults
);
const getCurrentPage = computed(() => store.getters.getCurrentPage);
const setCurrentPage = () =>
  store.commit("SET_CURRENT_PAGE", getCurrentPage.value + 1);
const setPreviousPage = () =>
  store.commit("SET_CURRENT_PAGE", getCurrentPage.value - 1);

const searchMovies = () => {
  setCurrentPage();
  const searchValue = search.value;
  const page = getCurrentPage.value;
  if (searchValue != "") {
    loadMovies({ searchValue, page });
  }
};
const loadPreviousMovies = () => {
  setPreviousPage();
  const searchValue = search.value;
  const page = getCurrentPage.value;
  if (searchValue != "") {
    loadMovies({ searchValue, page });
  }
};
</script>

<style scoped lang="postcss">
.c-home {
  &__wrapper {
    @apply flex flex-col items-center border-solid border-l-0 w-2/5;
  }

  &__form {
    @apply flex w-full;

    &-input {
      @apply rounded-md border-solid border-2 rounded-r-none border-r-0 py-3 px-10 w-full;
    }

    &-button {
      @apply py-3 px-4 bg-indigo-800 text-red-50 rounded-r-md border-2 border-indigo-800;
    }
  }

  &__button {
    @apply bg-gray-200 p-2 rounded-md;

    &-wrapper {
      @apply mt-20 flex justify-between w-full;
    }

    &-icon {
      @apply w-10 h-10;

      &.is-left {
        @apply transform rotate-180;
      }
    }
  }

  &__results {
    @apply mt-5;
  }
}

.is-active {
  @apply bg-indigo-800 text-white;
}
</style>
