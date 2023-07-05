<script>
import SearchName from "./header_components/SearchName.vue"
export default {
    components: { SearchName }
}
</script>

<template>
    <header>
        <div class="container d-flex justify-content-between py-3">
            <h1>BOOLFLIX</h1>
            <SearchName />
        </div>
    </header>
</template>


<style scoped lang="scss">
header {
    height: 10vh;
    background-color: black;
}

h1 {
    color: red;
}
</style>