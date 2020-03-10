import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/favicon.png";

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
