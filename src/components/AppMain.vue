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
    emits: ["id-changed", "hover-movie", "hover-tv"],
    methods: {
        getVote(vote) {
            const newVote = Math.ceil(vote / 2)
            return newVote
        },
        getImage(poster) {
            if (poster === null) return
            return this.url + poster
        },
    },
}
</script>


<template>
    <main>
        <div v-if="!store.movies.length || !store.tvSeries.length" class="background">
            <h2 class="m-0 ">Cerca un film o Serie</h2>
        </div>
        <div class="container" v-else>
            <h2 v-if="store.movies.length">Movies</h2>
            <div class="row row-cols-3">
                <CardMain v-for="movie in store.movies" :key="movie.id" :title="movie.title"
                    :originalTitle="movie.original_title" :language="movie.original_language"
                    :vote="getVote(movie.vote_average)" :img="getImage(movie.poster_path)" :id="movie.id"
                    :types="`movie`" />
            </div>
            <h2 h2 v-if="store.tvSeries.length">TV Series</h2>
            <div class="row row-cols-3">
                <CardMain v-for=" tv  in  store.tvSeries " :key="tv.id" :title="tv.name" :originalTitle="tv.original_name"
                    :language="tv.original_language" :vote="getVote(tv.vote_average)" :img="getImage(tv.poster_path)"
                    :id="tv.id" :types="`tv`" />
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
.background {
    height: 100%;
    width: 100%;
    background-image: url(../assets/img/1664271579476.jpg);
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        background-color: black;
        padding: 15px 30px;
        color: red;
    }
}

main {
    height: calc(100vh - 80px);
    background-color: #434343;
    overflow: auto;
}

h2 {
    color: white;
    margin-top: 20px;
}
</style>