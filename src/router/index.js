import { createRouter, createWebHistory } from "vue-router";
import MovieCard from '../components/MovieCard.vue';

const routes = [
  {
    path: '/movie/:id',
    name: 'Movie Card',
    component: MovieCard
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;