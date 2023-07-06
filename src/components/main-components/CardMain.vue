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
        <div class="my-card">
            <div class="image-card">
                <img :src="img" :alt="title" class="img-fluid">
            </div>
            <div class="card-body">
                <h2><strong>Titolo:</strong> {{ title }}</h2>
                <h3><strong>Titolo originale:</strong> {{ originalTitle }}</h3>
                <div class="stars mb-3"><strong>Voto:</strong>
                    <i class="fa-regular fa-star" :class="{ 'fa-solid': vote > 0 }"></i>
                    <i class="fa-regular fa-star" :class="{ 'fa-solid': vote > 1 }"></i>
                    <i class="fa-regular fa-star" :class="{ 'fa-solid': vote > 2 }"></i>
                    <i class="fa-regular fa-star" :class="{ 'fa-solid': vote > 3 }"></i>
                    <i class="fa-regular fa-star" :class="{ 'fa-solid': vote > 4 }"></i>
                </div>
                <img :src="getImagePath(language)" :alt="language" class="language">
            </div>
        </div>
    </div>
</template>



<style scoped lang="scss">
.col {
    padding: 20px;
}

.my-card {
    width: 100%;
    height: 100%;
    position: relative;

    &:hover .card-body {
        background-color: rgba($color: #000000, $alpha: 0.9);
        color: white;
        display: block;
    }
}

.image-card {
    height: 100%;
}

h2 {
    font-size: 1.4rem
}

h3 {
    font-size: 1.2rem;
}

.card-body {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: none;
    padding: 20px;

}

img {
    width: 100%;
    height: 100%;
}

.fa-star {
    color: white;
}

.fa-solid {
    color: gold
}

.language {
    width: 200px;
    height: 100px;
}
</style>