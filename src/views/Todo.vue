<template>
  <div id="todo-section">
    <h1>Todoリスト</h1>
    <div class="input-field">
      <input type="text" v-model="inputText" />
      <button v-on:click="addButton">追加</button>
    </div>
    <div class="todo-container">
      <div v-for="todo in getTodos" v-bind:key="'todo' + todo.id">
        <input type="checkbox" v-model="todo.isdone" />
        <span>{{ todo.title }}</span>
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
      inputText: ""
    };
  },
  computed: {
    ...mapGetters(["getTodos"])
  },
  methods: {
    ...mapActions(["addTodo"]),
    addButton() {
      this.addTodo(this.inputText);
      this.inputText = "";
    }
  }
};
</script>

<style></style>
