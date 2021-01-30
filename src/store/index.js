import { createStore } from "vuex";
import firebase from "firebase";

export default createStore({
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push({
        id: payload.id,
        title: payload.title,
        isdone: payload.isdone,
      });
    },
    deleteTodo(state, payload) {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
    updateTodo(state, { id, todo }) {
      state.todos.filter((todo) => todo.id == id)[0].title = todo;
    },
  },
  actions: {
    addTodo({ commit }, payload) {
      firebase
        .firestore()
        .collection("users/1/todos")
        .add({ title: payload, isdone: false })
        .then((doc) => {
          commit("addTodo", { id: doc.id, title: payload, isdone: false });
        });
    },
    deleteTodo({ commit }, id) {
      firebase
        .firestore()
        .collection("users/1/todos")
        .doc(id)
        .delete()
        .then(() => {
          commit("deleteTodo", id);
        });
    },
    updateTodo({ commit }, { id, todo }) {
      console.log(todo);

      firebase
        .firestore()
        .collection("users/1/todos")
        .doc(id)
        .update({ id: id, title: todo, isdone: false })
        .then(() => commit("updateTodo", { id: id, todo: todo }));
    },
    fetchTodos({ commit }) {
      firebase
        .firestore()
        .collection("users/1/todos")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            commit("addTodo", {
              id: doc.id,
              title: doc.data().title,
              isdone: doc.data().isdone,
            });
          });
        });
    },
  },
  modules: {},
  getters: {
    getTodos(state) {
      return state.todos;
    },
  },
});
