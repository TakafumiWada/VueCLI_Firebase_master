import { createStore } from "vuex";
import firebase from "firebase";

export default createStore({
  state: {
    todos: [],
    userAuth: false,
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
    setUser(state) {
      state.userAuth = true;
    },
    logoutUser(state) {
      state.userAuth = false;
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
    loginUser() {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(google_auth_provider);
    },
    logoutUser({ commit }) {
      firebase.auth().signOut();
      commit("logoutUser");
    },
    setUser({ commit }) {
      commit("setUser");
    },
  },
  modules: {},
  getters: {
    getTodos(state) {
      return state.todos;
    },
    checkUser(state) {
      return state.userAuth;
    },
  },
});
