<template>
    <ul>
        <ToDo
            @removeTodo="removeTodo"
            v-for="todo of todoList"
            :todo="todo"
            :key="todo.id"
        ></ToDo>
    </ul>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';
    import ToDo from "./ToDo.vue";
    import ToDoDto from "../../dto/ToDo.ts";
    @Component({
        components: {
            ToDo,
        },
    })
    export default class List extends Vue {
        @Prop() readonly todoList!: Array<ToDoDto>;

        removeTodo(id: number) {
            this.$emit('removeTodo', id);
        }
    }
</script>
