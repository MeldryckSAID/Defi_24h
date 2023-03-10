import { createRouter, createWebHistory } from "vue-router";

// Fonction d'authentification
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

// Fonctions Firestore
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import index from "../views/index.vue";

import cla from "../views/classement.vue";
import cont from "../views/contact.vue";
import who from "../views/who.vue";
import gal from "../views/galerie.vue";
import account from "../views/account.vue";

import mention from "../views/mention.vue";
import conexion from "../views/conexion.vue";
import admin from "../views/admin.vue";
import monespace from "../views/monespace.vue";
import NotFoundComponent from "../views/404.vue";
//import PageNotFound from "../components/PageNotFound.vue";

import buro from "../views/gal/buro.vue";
import lorem from "../views/gal/lorem.vue";
import Sacimder from "../views/gal/Sacimder.vue";
import lapin from "../views/gal/lapin.vue";
import zinzin from "../views/gal/zinzin.vue";
import arnaque from "../views/gal/arnaque.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: index },

    { path: "/cla", name: "classement", component: cla },
    { path: "/cont", name: "contact", component: cont },
    { path: "/who", name: "who", component: who },
    { path: "/gal", name: "galerie", component: gal },
    { path: "/account", name: "account", component: account },

    { path: "/mention", name: "mention", component: mention },

    //  { name: "NotFound", path: "/:pathMatch(.*)*", component: PageNotFound },
    {
      name: "NotFound",
      path: "/:pathMatch(.*)*",
      component: NotFoundComponent,
    },

    { path: "/buro", name: "buro", component: buro },
    { path: "/lorem", name: "lorem", component: lorem },
    { path: "/Sacimder", name: "Sacimder", component: Sacimder },
    { path: "/lapin", name: "lapin", component: lapin },
    { path: "/zinzin", name: "zinzin", component: zinzin },
    { path: "/arnaque", name: "arnaque", component: arnaque },

    { path: "/conexion", name: "conexion", component: conexion },
  ],
});

// On créé un guard : Observateur (fonction) permettant de savoir si un utilisateur
// a le droit d'utiliser une route
// paramètres : to : d'où il vient, from où il veut aller, next où il doit aller après contrôle
function guard(to, from, next) {
  // recherche utilisateur connecté
  getAuth().onAuthStateChanged(function (user) {
    if (user) {
      // User connecté
      console.log("router OK => user ", user);
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "user");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uiduser", "==", user.uid));
      onSnapshot(q, (snapshot) => {
        let userInfo = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // userInfo étant un tableau, on récupère
        // ses informations dans la 1° cellule du tableau : 0
        let isAdmin = userInfo[0].admin;
        if (isAdmin === true) {
          // Utilisateur administrateur, on autorise la page/vue
          next(to.params.name);
          return;
        } else {
          // Utilisateur non administrateur, renvoi sur accueil
          alert("Vous n'avez pas l'autorisation pour cette fonction");
          next({ name: "index" });
          return;
        }
      });
    } else {
      // Utilisateur non connecté, renvoi sur accueil
      console.log("router NOK => user ", user);
      next({ name: "index" });
    }
  });
}

function guard2(to, from, next) {
  // recherche utilisateur connecté
  getAuth().onAuthStateChanged(function (user) {
    if (user) {
      // User connecté
      console.log("router OK => user ", user);
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "user");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uiduser", "==", user.uid));
      onSnapshot(q, (snapshot) => {
        let userInfo = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // userInfo étant un tableau, on récupère
        // ses informations dans la 1° cellule du tableau : 0
        let connecter = userInfo[0].connect;
        if (connecter === true) {
          // Utilisateur administrateur, on autorise la page/vue
          next(to.params.name);
          return;
        } else {
          // Utilisateur non administrateur, renvoi sur accueil
          alert("Vous n'avez pas l'autorisation pour cette page");
          next({ name: "index" });
          return;
        }
      });
    } else {
      // Utilisateur non connecté, renvoi sur accueil
      console.log("router NOK => user ", user);
      next({ name: "index" });
    }
  });
}

export default router;
