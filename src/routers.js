import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "HomeItem",
    component: Home,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/SignUp",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
