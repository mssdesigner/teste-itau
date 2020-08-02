<template>
  <div class="container-fluid mt-4" id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    document.title = "Teste Itáu em Vue.js";
  }
};
</script>

<style>
</style>
