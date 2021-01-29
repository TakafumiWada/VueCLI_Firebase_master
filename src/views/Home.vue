<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <input v-model="inputText" v-focus />
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      inputText: "hogehoge"
    };
  },
  directives: {
    focus: {
      inserted(el) {
        console.log(el);
        el.focus();
      },
      update(value) {
        console.log(value);
      }
    }
  }
};
</script>
