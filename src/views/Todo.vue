<template>
  <div id="todo-section">
    <h1>Todoリスト！</h1>
    <div class="input-field">
      <input type="text" v-model="inputText" />
      <button v-on:click="addButton">追加</button>
    </div>
    <div class="todo-container">
      <div v-for="todo in getTodos" v-bind:key="todo.id">
        <input type="checkbox" v-model="todo.isdone" />
        <span>{{ todo.title }}</span>
        <button v-on:click="deleteButton(todo.id)">削除</button>
        <button v-on:click="updateButton(todo.id)">編集</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Todo",
  data() {
    return {
      inputText: "",
    };
  },
  computed: {
    ...mapGetters(["getTodos"]),
  },
  methods: {
    ...mapActions(["addTodo", "deleteTodo", "updateTodo"]),
    addButton() {
      this.addTodo(this.inputText);
      this.inputText = "";
    },
    deleteButton(id) {
      this.deleteTodo(id);
    },
    updateButton(id) {
      this.updateTodo({ id: id, todo: this.inputText });
      this.inputText;
    },
  },
};
</script>

<style></style>
