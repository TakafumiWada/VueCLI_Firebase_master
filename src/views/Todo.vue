<template>
  <div id="todo-section">
    <h1>Todoリスト</h1>
    <div class="input-field">
      <input type="text" v-model="inputText" />
      <button v-on:click="addTodo">追加</button>
    </div>
    <div class="todo-container">
      <div v-for="todo in todos" v-bind:key="'todo' + todo.id">
        <input type="checkbox" v-model="todo.isdone" />
        <span>{{ todo.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      inputText: "",
      todos: []
    };
  },
  methods: {
    addTodo() {
      this.todos.push({ title: this.inputText, isdone: false });
      this.inputText = "";
    }
  }
};
</script>

<style></style>
