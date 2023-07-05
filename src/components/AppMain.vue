<script>
import CardMain from "./main-components/CardMain.vue"
import { store } from "../assets/data/store";
export default {
    data() {
        return {
            store
        }
    },
    components: { CardMain },
}
</script>


<template>
    <main>
        <div class="container">
            <div class="row">
                <CardMain v-for="movie in store.movies" :title="movie.title" :originalTitle="movie.original_title"
                    :language="movie.original_language" :vote="movie.vote_average" />
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
main {
    height: 90vh;
    background-color: #434343;
}
</style>