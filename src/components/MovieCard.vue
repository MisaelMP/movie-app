<template>
	<div class="c-movie-card">
		<div class="c-movie-card__content">
			<h2 class="c-movie-card__title">{{ singleMovie.Title }}</h2>
			<p class="c-movie-card__genre">{{ singleMovie.Genre }}</p>
			<p class="c-movie-card__plot">{{ singleMovie.Plot }}</p>
			<p class="c-movie-card__text">
				<span>Language:</span> {{ singleMovie.Language }}
			</p>
			<p class="c-movie-card__text">
				<span>Director: </span>{{ singleMovie.Director }}
			</p>
			<p class="c-movie-card__text">
				<span>Actors:</span> {{ singleMovie.Actors }}
			</p>
			<p class="c-movie-card__text">
				<span>Duration:</span> {{ singleMovie.Runtime }}
			</p>
		</div>
		<div class="c-movie-card__image-wrapper">
			<img
				:src="singleMovie.Poster"
				:alt="singleMovie.Title"
				class="c-movie-card__image"
			/>
		</div>
	</div>
</template>
<script setup>
import { onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const props = defineProps({
	movie: Object,
});

const store = useStore();
const route = useRoute();
const loadMovie = (value) => store.dispatch("LOAD_MOVIE", value);
const singleMovie = computed(() => store.getters.getMovie);

watch(
	() => route.params,
	() => {
		loadMovie(route.params.id);
	},
	{ deep: true }
);

onMounted(() => {
	loadMovie(route.params.id);
});
</script>
<style scoped lang="postcss">
.c-movie-card {
	@apply flex w-3/5 ml-10;

	&__title {
		@apply mb-5;
		font-size: clamp(1rem, 2vw, 2rem);
	}

	&__content {
		@apply w-1/2 mr-10 text-left object-cover;
	}

	&__genre {
		@apply bg-gray-200 rounded-md p-3 my-6 text-sm;
	}

	&__image {
		@apply rounded-md w-full;

		&-wrapper {
			@apply w-1/2;
		}
	}

	&__text {
		@apply mt-2;
		&:first-child {
			@apply mt-4;
		}
		& span {
			@apply font-bold;
			font-family: monoton;
		}
	}
}
</style>
