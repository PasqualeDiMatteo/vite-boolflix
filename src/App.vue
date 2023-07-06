<script>
const endpoint = "https://api.themoviedb.org/3/search"

import axios from "axios"
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
import { store } from "./assets/data/store"
import AppLoader from "./components/AppLoader.vue"



export default {
  data() {
    return {
      store,
      searchName: "",

      isLoaded: false,
    }
  },
  methods: {
    fetchMovie(url, party) {
      store.isLoaded = true
      axios.get(url).then(res => {
        store[party] = res.data.results
        console.log(res.data.results)
        store.isLoaded = false
      })
    },
    fetchCast(url) {
      axios.get(url).then(res => {
        store.actorsMovies = res.data.cast
      })
    },
    filteredName(searchTerm) {
      this.searchName = searchTerm
    },
    onClickSubmit() {
      if (!this.searchName) {
        store.movies = [];
        store.tvSeries = [];
        return
      }
      this.fetchMovie(`${endpoint}/movie?api_key=c96a2f3b2de749ca0a2264917b319a40&query=${this.searchName}&language=it-IT`, ["movies"])
      this.fetchMovie(`${endpoint}/tv?api_key=c96a2f3b2de749ca0a2264917b319a40&query=${this.searchName}&language=it-IT`, ["tvSeries"])
    },
    onIdChanged(currentId) {
      if (store.isMovie === true) {
        this.fetchCast(`https://api.themoviedb.org/3/movie/${currentId}/credits?api_key=c96a2f3b2de749ca0a2264917b319a40`);
      } if (store.isMovie === false) {
        this.fetchCast(`https://api.themoviedb.org/3/tv/${currentId}/credits?api_key=c96a2f3b2de749ca0a2264917b319a40`)
      }
    },
  },
  components: { AppHeader, AppMain, AppLoader }
}
</script>

<template>
  <AppHeader @term-search="filteredName" @click-submit="onClickSubmit" />
  <AppMain @id-changed="onIdChanged" />
  <AppLoader />
</template>


<style lang="scss">
@use"./assets/scss/style.scss"
</style>