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
    methods: {
        getVote(vote) {
            const newVote = Math.ceil(vote / 2)
            return newVote
        }
    }
}
</script>


<template>
    <main>
        <div class="container">
            <h2 v-if="store.movies.length">Movies</h2>
            <div class="row row-cols-3">
                <CardMain v-for="movie in store.movies" :key="movie.id" :title="movie.title"
                    :originalTitle="movie.original_title" :language="movie.original_language"
                    :vote="getVote(movie.vote_average)" :img="this.url + movie.poster_path" />
            </div>
            <h2 v-if="store.tvSeries.length">TV Series</h2>
            <div class="row row-cols-3">
                <CardMain v-for=" tv  in  store.tvSeries " :key="tv.id" :title="tv.name" :originalTitle="tv.original_name"
                    :language="tv.original_language" :vote="getVote(tv.vote_average)" :img="this.url + tv.poster_path" />
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