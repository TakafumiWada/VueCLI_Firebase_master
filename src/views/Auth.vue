<template>
  <div id="auth">
    <button v-on:click="loginButton">ログイン</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  mounted() {
    this.userAuthAdmin();
  },
  methods: {
    ...mapActions(["loginUser"]),
    loginButton: function() {
      this.loginUser();
      //location.reload();
      this.userAuthAdmin();
    },
    userAuthAdmin: function() {
      if (this.$store.getters.checkUser) {
        this.$router.push("/admin");
      }
    },
  },
};
</script>

<style></style>
