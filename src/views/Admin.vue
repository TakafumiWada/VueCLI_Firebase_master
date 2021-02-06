<template>
  <div id="admin">adminページです</div>
  <button v-on:click="logoutButton">ログアウト</button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["logoutUser"]),
    logoutButton: function() {
      this.logoutUser();
      this.$router.push({ name: "Auth" });
    },
  },
};
</script>

<style></style>
