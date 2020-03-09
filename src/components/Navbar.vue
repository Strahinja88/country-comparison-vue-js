<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
    <div class="container">
      <router-link
        :to="isAuthenticated() ? {name: 'dashboard'} : {name: 'login'}"
        class="navbar-brand"
      >Country Comparasion</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div v-if="isAuthenticated()" class="collapse navbar-collapse text-white" id="mobile-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="#" class="text-white text-center nav-link">Hi, {{user}}</a>
          </li>
          <li class="nav-item">
            <a @click="logout" href="#" class="nav-link">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { authenticationMixin } from "../mixins/authenticationMixin";

export default {
  name: "navbar",
  mixins: [authenticationMixin],
  data() {
    return {};
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
  }
};
</script>

<style scoped>
</style>