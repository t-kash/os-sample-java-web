<template>
  <section class="container">
    <ul>
      <li v-for="todo in todoList" :key="todo">
        <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo)" />
        <span :class="{done: todo.done}">{{todo.text}}</span>
      </li>
      <li>
        <input placeholder="please write your todo!!" @keyup.enter="addTodo" />
      </li>
    </ul>
  </section>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  layout: "generic",
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
      toggleTodo: "todo/toggle"
    })
  }
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>