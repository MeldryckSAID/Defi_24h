<script>
// Import des fonction d'authentification
import {
  getAuth, // Fonction générale d'authentification
  signInWithEmailAndPassword, // Se connecter avec un email + mot de passe
  signOut, // Se deconnecter
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

// Fonctions Firestore
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Import emetteur de main.js
import { emitter } from "../main.js";

export default {
  data() {
    return {
      user: {
        // User connecté
        email: null,
        password: null,
      },
      userInfo: null, // Informations complémentaires user connecté

      isAdmin: false, // Si l'utilisateur est ou non administrateur
      message: null, // Message de connexion
      view: false, // Afficher / cacher le mot de passe
      type: "password", // Type de champs pour le password : password / text pour l'afficher
    };
  },
  mounted() {
    // Montage de la vue
    this.message = "User non connecté";

    // Vérifier si un user connecté existe déjà
    // Au lancement de l'application
    this.getUserConnect();

    // Ecoute de l'évènement de connexion
    emitter.on("connectUser", (e) => {
      // Récupération du user
      this.user = e.user;
     
      // Recherche infos complémentaires du user
      this.getUserInfo(this.user);
    });

    // Ecoute de l'évènement de deconnexion
    emitter.on("deConnectUser", (e) => {
      // Récupération user
      this.user = e.user;
      
      // Réinitialisation infos complémentaires user
      this.userInfo = null;

      this.isAdmin = false;
    });
  },
  methods: {
    // Obtenir les informations du user connecté
    async getUserConnect() {
      await getAuth().onAuthStateChanged(
        function (user) {
          if (user) {
            // Récupération du user connecté
            this.user = user;
            // Recherche de ses infos complémentaires
            this.getUserInfo(this.user);
          }
        }.bind(this)
      );
      // Noter le bind(this), cas des zones isolées
      // lors de 2 strucutres imbiquées, Vue perd la visibilité
      // des données
      // On les ré injecte par le mot-clef this
    },

    async getUserInfo(user) {
      // Rechercher les informations complémentaires de l'utilisateur
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUser = collection(firestore, "user");
      // Recherche du user par son uid
      const q = query(dbuser, where("uiduser", "==", user.uid));
      await onSnapshot(q, (snapshot) => {
        this.userInfo = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        // userInfo étant un tableau, onn récupère
        // ses informations dans la 1° cellule du tableau : 0

        this.isAdmin = this.userInfo[0].admin;
        // Recherche de l'image du user sur le Storage
      });
    },

    onCnx() {
      // Se connecter avec user et mot de passe
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          // Connexion OK - mise à jour du user
          this.user = response.user;
          // Emission evenement de connexion
          emitter.emit("connectUser", { user: this.user });
         
          // Mise à jour du message
          this.message = "User connecté : " + this.user.email;
        })
        .catch((error) => {
          // Erreur de connexion
          console.log("Erreur connexion", error);
          this.message = "Erreur d'authentification";
        });
    },

    // Se deconnecter
    onDcnx() {
      // Se déconnecter
      signOut(getAuth())
        .then((response) => {
          // Mise à jour du message
          this.message = "User non connecté";
          // Ré initialisation des champs
          this.user = {
            email: null,
            password: null,
          };
          // Emission évènement de déconnexion
          emitter.emit("deConnectUser", { user: this.user });
        })
        .catch((error) => {
          console.log("erreur deconnexion ", error);
        });
    },

    // Affiche/masque le champs password
    affiche() {
      this.view = !this.view;
      if (this.view) {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
  },
};
</script>

<script setup>
import f from "/src/components/f.vue";
</script>
<template>
  <main class="min-h-screen">
    <div>
      <div>
        <div class="flex mb-9 py-4 items-center justify-center">
          <div>
            <h1 class="athena text-3xl mb-3 text-dark-blue pl-3">
              Administration
            </h1>
            <div>
              <div class="border-2 w-3/4 bg-dark-blue border-dark-blue"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex mb-9 py-4 items-center">
      <div>
        <h2 class="athena text-xl md:text-3xl lg:text-5xl text-dark-blue pl-3">
          Les participant
        </h2>

        <div>
          <div class="border-2 w-3/4 bg-dark-blue border-dark-blue"></div>
        </div>
      </div>
    </div>
    <section></section>
  </main>
  <footer>
    <f />
  </footer>
</template>

<style>
.athena {
  font-family: "athenaregular";
}
.okiner {
  font-family: "made_okine_sans_personal_usRg";
}
.okinel {
  font-family: "made_okine_sans_personal_usLt";
}
</style>
