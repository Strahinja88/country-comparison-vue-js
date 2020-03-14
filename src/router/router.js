import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../components/common/Login";
import Dashboard from "../components/dashboard/Dashboard";
import Covid from "../components/covid/Covid";

Vue.use(VueRouter);

const routes = [
  {
    path: "/covid-19",
    component: Covid,
    name: "covid-19"
  },
  {
    path: "/dashboard",
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
    redirect: "/covid-19"
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

router.beforeEach((to, from, next) => {
  if (to.name === "dashboard" || to.name === "covid-19") {
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
