<script>
import CardMain from "./main-components/CardMain.vue"
import { store } from "../assets/data/store";
export default {
    data() {
        return {
            store,
            url: "https://image.tmdb.org/t/p/w342"
        }
    },
    components: { CardMain },
}
</script>


<template>
    <main>
        <div class="container">
            <h2 v-if="store.movies.length">Movies</h2>
            <div class="row row-cols-3">
                <CardMain v-for="movie in store.movies" :title="movie.title" :originalTitle="movie.original_title"
                    :language="movie.original_language" :vote="movie.vote_average" :img="this.url + movie.poster_path" />
            </div>
            <h2 v-if="store.tvSeries.length">TV Series</h2>
            <div class="row row-cols-3">
                <CardMain v-for=" tv  in  store.tvSeries " :title="tv.name" :originalTitle="tv.original_name"
                    :language="tv.original_language" :vote="tv.vote_average" :img="this.url + tv.poster_path" />
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
main {
    height: 90vh;
    background-color: #434343;
    overflow: auto;
}
</style>