<script>
export default {
    data() {
        return {
            searchTerm: ""
        }
    },
    emits: ["term-change", "click-submit"]
}

</script>

<template>
    <nav>
        <form @submit.prevent="$emit('click-submit')">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Cerca..." v-model.trim="searchTerm"
                    @keyup="$emit('term-change', searchTerm)">
                <button class="btn btn-outline-secondary" type="submit">Button</button>
            </div>
        </form>
    </nav>
</template>

<style scoped lang="scss">
.input-group {
    width: 300px;
}
</style>