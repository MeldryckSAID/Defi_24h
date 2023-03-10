import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./index.css";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

// Import de mitt
import mitt from "mitt";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAjOAqTNM7obwpW60mQ4M0YXtY_1HiViR8",
    authDomain: "defi-48-h.firebaseapp.com",
    projectId: "defi-48-h",
    storageBucket: "defi-48-h.appspot.com",
    messagingSenderId: "975834701126",
    appId: "1:975834701126:web:b3ad47a5418478a0b85947"
  };

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const app = createApp(App);

//let signInButton = document.getElementById("signup");

export const emitter = mitt();
// créer l'émetteur comme propriété globale
// de l'application
app.config.globalProperties.emitter = emitter;

app.use(router);

app.mount("#app");
