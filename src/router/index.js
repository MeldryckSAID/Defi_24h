import { createRouter, createWebHistory } from "vue-router";
import index from "../views/index.vue";
import test from "../views/test.vue";
import cla from "../views/classement.vue";
import cont from "../views/contact.vue";
import who from "../views/who.vue";
import gal from "../views/galerie.vue";
import account from "../views/account.vue";
import mention from "../views/mention.vue";
import conexion from "../views/conexion.vue";
import PageNotFound from "../components/PageNotFound.vue";

import buro from "../views/gal/buro.vue";
import lorem from "../views/gal/lorem.vue";
import Sacimder from "../views/gal/Sacimder.vue";
import lapin from "../views/gal/lapin.vue";
import zinzin from "../views/gal/zinzin.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: index },
    { path: "/test", name: "test", component: test },
    { path: "/cla", name: "classement", component: cla },
    { path: "/cont", name: "contact", component: cont },
    { path: "/who", name: "who", component: who },
    { path: "/gal", name: "galerie", component: gal },
    { path: "/account", name: "inscription", component: account },
    { path: "/mention", name: "mention", component: mention },
    { name: "NotFound", path: "/:pathMatch(.*)*", component: PageNotFound },

    { path: "/buro", name: "buro", component: buro },
    { path: "/lorem", name: "lorem", component: lorem },
    { path: "/Sacimder", name: "Sacimder", component: Sacimder },
    { path: "/lapin", name: "lapin", component: lapin },
    { path: "/zinzin", name: "zinzin", component: zinzin },
    { path: "/conexion", name: "conexion", component: conexion },
  ],
});

export default router;
