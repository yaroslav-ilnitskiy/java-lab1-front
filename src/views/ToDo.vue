<template>
    <div class="c-todo">
        <FormToDo @addTodo="addTodo"></FormToDo>
        <List @removeTodo="removeTodo" :todo-list="todoList"></List>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import List from '../components/ToDo/List.vue'
    import FormToDo from '../components/ToDo/Form.vue';
    import http from "@/http-common";
    import ToDoDto from "@/dto/ToDo";

    @Component({
        components: {
            List,
            FormToDo,
        },
    })
    export default class ToDo extends Vue {
        todoList: Array<ToDoDto> = [];

        async created() {
            const response = await http.get('/todo');

            this.todoList = response.data;
        }

        addTodo(todo: ToDoDto) {
            this.todoList.push(todo);
        }

        removeTodo(id: number) {
            this.todoList = this.todoList.filter(todo => todo.id !== id);
        }
    }
</script>
