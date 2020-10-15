<template>
    <form @submit.prevent="save">
        <label for="description">Description</label>
        <input type="text" id="description" v-model="description">
        <button :disabled="!description">Add</button>
    </form>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import http from "../../http-common";

    @Component()
    export default class Form extends Vue {
        description = '';

        async save(): void {
            const response = await http.post('/todo', { description: this.description });

            this.$emit('addTodo', response.data);

            this.description = '';
        }
    }
</script>
