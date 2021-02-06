<template>
  <div id="auth">
    <button v-on:click="loginButton">ログイン</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  created() {
    this.userAuthAdmin();
  },
  methods: {
    ...mapActions(["loginUser"]),
    loginButton: function() {
      this.loginUser();
    },
    userAuthAdmin: function() {
      console.log(this.$store.getters.checkUser);
      if (this.$store.getters.checkUser) {
        this.$router.push("/admin");
      }
    },
  },
};
</script>

<style></style>
