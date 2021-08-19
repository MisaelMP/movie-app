import MainService from "./MainService";

export default {
  getMovies({value}) {
    return MainService.get(
      `?apikey=${import.meta.env.VITE_API_KEY}&s=${value.searchValue}&page=${value.page}`
    );
  }
}