<template>
	<div
		v-if="movie.Title"
		@click="singleMovie(movie.imdbID)"
		:class="isActive ? 'is-active' : !isActive"
	>
		<p class="c-movie-list__content">{{ movie.Title || "not available" }}</p>
		<p class="c-movie-list__year">{{ movie.Year || "not available" }}</p>
	</div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

import MovieCard from "./MovieCard.vue";

const props = defineProps({
	movie: Object,
});

let isActive = ref(false);

const router = useRouter();

function singleMovie(id) {
	router.push(`/movie/${id}`);
	isActive.value = true;
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