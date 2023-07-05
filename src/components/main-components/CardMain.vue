<script>
export default {
    props: {
        title: String,
        originalTitle: String,
        language: String,
        vote: Number,
        img: String
    },
    methods: {
        getImagePath(language) {
            const url = new URL(`../../assets/img/${language}.png`, import.meta.url)
            return url.href
        }
    }
}
</script>



<template>
    <div class="col">
        <ol>
            <img :src="img" :alt="title">
            <li>{{ title }}</li>
            <li>{{ originalTitle }}</li>
            <li><img :src="getImagePath(language)" :alt="language"></li>
            <li>{{ vote }}</li>
        </ol>
    </div>
</template>



<style scoped lang="scss">
li {
    color: white;
}

img {
    width: 200px;
}
</style>