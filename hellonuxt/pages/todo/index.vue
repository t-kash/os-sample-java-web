<template>
  <section class="container">
    <div>
      <ul>
        <li v-for="todo in todoList" :key="todo">
          <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo)" />
          <span :class="{done: todo.done}">{{todo.text}}</span>
          <button class="button--green" @click="deleteTodo(todo)">del</button>
        </li>
        <li>
          <input placeholder="please write your todo!!" @keyup.enter="addTodo" />
        </li>
      </ul>
      <br />
      <button class="button--grey" @click="deleteAllTodo(todoList)">delAll</button>
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  layout: "generic",
  async fetch({ store, params }) {
    let todoList = store.state.todo.todoList;
    if (todoList.indexOf("plz fix me!!") == -1) {
      store.commit("todo/add", "plz fix me!!");
    }
  },
  computed: {
    todoList() {
      return this.$store.state.todo.todoList;
    }
  },
  methods: {
    addTodo(e) {
      this.$store.commit("todo/add", e.target.value);
      e.target.value = "";
    },
    ...mapMutations({
      toggleTodo: "todo/toggle",
      deleteTodo: "todo/delete",
      deleteAllTodo: "todo/deleteAll"
    })
  }
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>