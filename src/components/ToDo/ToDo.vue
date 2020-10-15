<template>
    <li>
        <template v-if="isEdit">
            <input type="text" v-model="description">
            <input type="checkbox" v-model="isFinished">
            <button @click="save">save</button>
            <button @click="cancel">cancel</button>
        </template>
        <template v-else>
            {{ todo.description }}
            <b>{{ todo.isFinished ? 'DONE' : 'TODO' }}</b>
            <button @click="edit">edit</button>
            <button @click="remove">delete</button>
        </template>
    </li>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';
    import ToDo from "../../dto/ToDo.ts";
    import http from "../../http-common";

    @Component()
    export default class List extends Vue {
        @Prop() todo!: ToDo;

        isEdit = false;

        description = '';
        isFinished = false;

        async remove(): void {
            await http.delete(`/todo/${this.todo.id}`);

            this.$emit('removeTodo', this.todo.id);
        }

        edit(): void {
            this.isEdit = true;
            this.description = this.todo.description;
            this.isFinished = this.todo.isFinished;
        }

        async save(): void {
            const data: any = { ...this.todo, description: this.description, isFinished: this.isFinished };
            const response:any = await http.put(`/todo/${this.todo.id}`, data);

            this.todo = response.data;

            this.isEdit = false;
        }

        cancel(): void {
            this.isEdit = false;
        }
    }
</script>

