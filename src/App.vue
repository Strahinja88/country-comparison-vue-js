<template>
  <div id="app">
    <app-navbar />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "app",
  components: {
    "app-navbar": Navbar
  },
  data() {
    return {};
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}
</style>
