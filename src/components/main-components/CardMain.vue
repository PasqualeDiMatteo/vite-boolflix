<script>
export default {
    props: {
        title: String,
        originalTitle: String,
        language: String,
        vote: Number,
    }
}
</script>



<template>
    <div class="col">
        <ol>
            <li>{{ title }}</li>
            <li>{{ originalTitle }}</li>
            <li>{{ language }}</li>
            <li>{{ vote }}</li>
        </ol>
    </div>
</template>



<style scoped lang="scss">
li {
    color: white;
}
</style>