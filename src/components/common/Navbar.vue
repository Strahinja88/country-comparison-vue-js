<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
    <div class="container">
      <div class="custom-navbar-brand-wrapper">
        <router-link
          :to="isAuthenticated() ? {name: 'covid-19'} : {name: 'login'}"
          class="custom-navbar-brand-item"
        >COVID 19</router-link>
        <span class="text-white custom-navbar-brand-devider">|</span>
        <router-link
          :to="isAuthenticated() ? {name: 'dashboard'} : {name: 'login'}"
          class="custom-navbar-brand-item"
        >Country Comparasion</router-link>
      </div>

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
import { authenticationMixin } from "../../mixins/authenticationMixin";

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
.custom-navbar-brand-item {
  font-size: 20px;
  text-decoration: none;
  color: #fff;
}

.custom-navbar-brand-devider {
  font-size: 20px;
  padding: 10px;
}

.router-link-active {
  color: yellow;
}

/* Max width 600px */
@media only screen and (max-width: 600px) {
  .custom-navbar-brand-item {
    font-size: 16px;
  }

  .custom-navbar-brand-devider {
    font-size: 16px;
  }
}
</style>