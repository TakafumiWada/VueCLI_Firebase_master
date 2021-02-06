import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Todo from "@/views/Todo.vue";
import Admin from "@/views/Admin.vue";
import Auth from "@/views/Auth.vue";
import store from "../store/index.js";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/todo",
    name: "Todo",
    component: Todo,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      reqiresAuth: true,
    },
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const checkUser = store.getters["checkUser"];

  if (to.matched.some((record) => record.meta.reqiresAuth)) {
    if (checkUser) {
      next();
    } else {
      next("auth");
    }
  } else {
    next();
  }
});

export default router;
