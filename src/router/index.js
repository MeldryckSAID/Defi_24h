import { createRouter, createWebHistory } from "vue-router";
import index from "../views/index.vue";
import test from "../views/test.vue";
import cla from "../views/classement.vue";
import cont from "../views/contact.vue";
import who from "../views/who.vue";
import gal from "../views/galerie.vue";
import account from "../views/account.vue";
import mention from "../views/mention.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: index },
    { path: "/test", name: "test", component: test },
    { path: "/cla", name: "classement", component: cla },
    { path: "/cont", name: "contact", component: cont },
    { path: "/who", name: "who", component: who },
    { path: "/gal", name: "galerie", component: gal },
    { path: "/account", name: "account", component: account },
    { path: "/mention", name: "mention", component: mention },
  ],
});

export default router;
