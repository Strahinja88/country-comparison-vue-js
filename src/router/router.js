import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../components/Login";
import Dashboard from "../components/dashboard/Dashboard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Dashboard,
    name: "dashboard"
  },
  {
    path: "/login",
    component: Login,
    name: "login"
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

router.beforeEach((to, from, next) => {
  if (to.name === "dashboard") {
    if (!localStorage.user) {
      next("/login");
    }
  }
  next();

  if (to.name === "login") {
    if (localStorage.user) {
      next("/");
    }
  }
  next();
});

export default router;
