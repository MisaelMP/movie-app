<template>
  <div
    v-if="movie.Title"
    @click="singleMovie(movie.imdbID)"
    :class="{'is-active' : isActive}"
  >
    <p class="c-movie-list__content">{{ movie.Title || "not available" }}</p>
    <p class="c-movie-list__year">{{ movie.Year || "not available" }}</p>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, computed } from "vue";

import MovieCard from "./MovieCard.vue";

const props = defineProps({
  movie: Object,
});

const router = useRouter();
const route = useRoute();

let isActive = computed(() => props.movie.imdbID == route.params.id);


function singleMovie(id) {
  router.push(`/movie/${id}`);
}
</script>
<style scoped lang="postcss">
.c-movie-list {
  @apply flex cursor-pointer border-solid border border-indigo-800 w-full justify-between mt-5 py-2 px-2 rounded-md;

  &__content {
    &.is-active {
      @apply bg-indigo-800;
    }
  }
}
</style>