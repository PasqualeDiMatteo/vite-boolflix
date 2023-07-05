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
            <li><img :src="getImagePath(language)" :alt="language" class="language"></li>
            <li>
                <i class="fa-regular fa-star" :class="{ 'fa-solid': vote > 0 }"></i>
                <i class="fa-regular fa-star" :class="{ 'fa-solid': vote > 1 }"></i>
                <i class="fa-regular fa-star" :class="{ 'fa-solid': vote > 2 }"></i>
                <i class="fa-regular fa-star" :class="{ 'fa-solid': vote > 3 }"></i>
                <i class="fa-regular fa-star" :class="{ 'fa-solid': vote > 4 }"></i>
            </li>
        </ol>
    </div>
</template>



<style scoped lang="scss">
li {
    color: white;
}

.language {
    width: 200px;
    height: 100px;
}
</style>