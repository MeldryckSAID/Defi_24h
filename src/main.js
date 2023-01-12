import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./index.css";


 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAjOAqTNM7obwpW60mQ4M0YXtY_1HiViR8",
   authDomain: "defi-48-h.firebaseapp.com",
   projectId: "defi-48-h",
   storageBucket: "defi-48-h.appspot.com",
   messagingSenderId: "975834701126",
   appId: "1:975834701126:web:b3ad47a5418478a0b85947",
 };

 // Initialize Firebase
 const appfirebase = initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount("#app");
