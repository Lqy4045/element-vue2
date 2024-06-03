import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import { tableRouter } from "./modules/table";
import { formRouter } from "./modules/form";
Vue.use(VueRouter);

const constantRoutes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];
export const asyncRoutes = [...tableRouter, ...formRouter];
export const otherRoutes = [
  {
    path: "*",
    component: () => import("@/views/404.vue"),
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  constantRoutes,
});

export default router;
