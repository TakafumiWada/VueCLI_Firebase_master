import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      {
        title: "sample",
        isdone: false
      }
    ]
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push({ title: payload, isdone: false });
      console.log(state);
    }
  },
  actions: {
    addTodo({ commit }, payload) {
      commit("addTodo", payload);
    }
  },
  modules: {},
  getters: {
    getTodos(state) {
      return state.todos;
    }
  }
});
