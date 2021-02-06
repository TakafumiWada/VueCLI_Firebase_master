<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/todo">Todo</router-link>|
    <router-link to="/admin">Admin</router-link>
  </div>
  <router-view />
</template>

<script>
import { mapActions } from "vuex";
import firebase from "firebase";

export default {
  created() {
    this.fetchTodos();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setUser();
        console.log("ログイン成功");
        if (this.$route.path === "/auth") {
          this.$router.push({ name: "Admin" });
        }
      } else {
        console.log("ログインしてください");
      }
    });
  },
  methods: {
    ...mapActions(["fetchTodos", "setUser"]),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
