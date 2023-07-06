<script>
import SearchName from "./header_components/SearchName.vue"
export default {
    components: { SearchName },
    data() {
        return {
        }
    },
    emits: ["term-search", "click-submit"],
    methods: {
        onTermChange(searchTerm) {
            this.$emit("term-search", searchTerm)
        },
        searchTerm() {
            this.$emit("click-submit")
        }
    }
}
</script>

<template>
    <header>
        <div class="container d-flex justify-content-between py-3 align-items-center">
            <h1 class="m-0">BOOLFLIX</h1>
            <SearchName @term-change="onTermChange" @click-submit="searchTerm" />
        </div>
    </header>
</template>


<style scoped lang="scss">
header {
    height: 80px;
    background-color: black;
}

h1 {
    color: red;
}
</style>