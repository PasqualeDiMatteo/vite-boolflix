import { reactive } from "vue";
export const store = reactive({
  movies: [],
  tvSeries: [],
  isLoaded: false,
  actorsMovies: [],
  isMovie: true,
});
