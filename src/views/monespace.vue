<template>
  <main>
    <div>
      <div>
        <div class="flex mb-9 py-4 items-center justify-center">
          <div>
            <h1 class="athena text-3xl mb-3 text-dark-blue pl-3">
              Mon espace personnel
            </h1>
            <div>
              <div class="border-2 w-3/4 bg-dark-blue border-dark-blue"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 class="Okiner text-2xl my-5 text-center w-fit m-auto">
      {{ prenom }} {{ nom }}
    </h1>
    <form
      class="flex flex-col gap-5 m-auto w-11/12 md:w-2/3 mt-20"
      @submit.prevent="updateUser()"
      enctype="multipart/form-data"
    >
      <section class="flex flex-col gap-10 w-full mb-5">
        <div class="flex flex-col">
          <label class="font-black">Prénom*</label>
          <input
            type="text"
            class="bg-beige border-b-4 border-b-black"
            placeholder="Prénom"
            name="prenom"
            v-model="prenom"
            required
          />
        </div>
        <div class="flex flex-col">
          <label class="font-black">Nom*</label>
          <input
            type="text"
            class="border-b-4 border-b-black"
            placeholder="Nom"
            name="nom"
            v-model="nom"
            required
          />
        </div>
        <div class="flex flex-col">
          <label class="font-black">Pseudo</label>
          <input
            type="text"
            class="bg-beige border-b-4 border-b-black"
            placeholder="Pseudonyme"
            name="pseudo"
            v-model="pseudo"
          />
        </div>
      </section>

      <!--Partie 2-->
      <h2 class="mmi-h2 text-rouge">Je souhaite...</h2>
      <!--Partie 2-->

      <div
        class="grid grid-cols-[2%,98%] justify-items-start p-4 gap-5 items-center w-full"
      >
        <input
          type="checkbox"
          class="w-5 h-5"
          name="soireeanniv"
          v-model="soireeanniv"
        />
        <label class="uppercase">PARTICIPER À LA SOIRÉE DES 25 ANS MMI</label>
      </div>

      <div
        class="grid grid-cols-[2%,98%] justify-items-start p-4 gap-5 items-center w-full"
      >
        <input type="checkbox" class="w-5 h-5" v-model="participationdefi" />
        <label class="uppercase">PARTICIPER AU DÉFI 24H</label>
      </div>

      <div
        class="grid grid-cols-[2%,98%] justify-items-start p-4 gap-5 items-center w-full"
      >
        <input type="checkbox" class="w-5 h-5" v-model="benevoledefi" />
        <label class="uppercase">ÊTRE BÉNÉVOLE LORS DU DÉFI 24H</label>
      </div>

      <div
        class="grid grid-cols-[2%,98%] justify-items-start p-4 gap-5 items-center w-full"
      >
        <input type="checkbox" class="w-5 h-5" v-model="visitedefi" />
        <label class="uppercase">
          Revoir et discuter avec les anciens étudiants et les professeurs LORS
          DU DÉFI 24H</label
        >
      </div>

      <!--PARTIE 3-->
      <h2 class="mmi-h2 text-bleu">Je suis...</h2>
      <!--PARTIE 3-->

      <div
        class="grid grid-cols-[2%,98%] justify-items-start p-4 gap-5 items-center w-full"
      >
        <input type="radio" class="w-5 h-5" v-model="role" value="etudiant" />
        <label>Actuellement étudiant.e (MMI1, MMI2 ou LPWD)</label>
      </div>

      <div
        class="grid grid-cols-[2%,98%] justify-items-start p-4 gap-5 items-center w-full"
      >
        <input
          type="radio"
          class="w-5 h-5"
          v-model="role"
          value="ancien-etudiant"
        />
        <label>Un.e ancien.ne étudiant.e</label>
      </div>

      <div
        class="grid grid-cols-[2%,98%] justify-items-start p-4 gap-5 items-center w-full"
      >
        <input
          type="radio"
          class="w-5 h-5"
          v-model="role"
          value="autre-que-etudiant"
        />
        <label>Autre</label>
      </div>
      <RouterLink to="/">
        <Boutonb
          class="p-4 md:p-6 bg-black text-beige w-fit m-auto my-5 rounded-md"
          type="submit"
        >
          Modifier mon profil
        </Boutonb>
      </RouterLink>
    </form>

    <section>
      <div class="flex ml-3 mb-9 py-4">
        <div>
          <h2
            class="athena text-xl md:text-3xl lg:text-5xl text-dark-blue pl-3"
          >
            Projets
          </h2>

          <div>
            <div class="border-2 w-3/4 bg-dark-blue border-dark-blue"></div>
          </div>
        </div>
      </div>
      <p class="okiner text-xl m-3 my-5">
        Ici vous pouvez accéder aux rendus de projet.
      </p>

      <div class="flex justify-center">
        <div
          class="gap-5 m-5 w-3/4 lg:w-1/2 md:w-1/2 flex flex-col justify-center"
        >
          <input
            class="border-b-4 border-b-black placeholder:text-slate-500 placeholder:okinel"
            placeholder="Nom de votre Équipe"
            name="Equipe"
            id=""
            cols="1"
            rows="3"
            v-model="nomEquipe"
          />
          <input
            class="border-b-4 border-b-black placeholder:text-slate-500 placeholder:okinel"
            placeholder="Nom de votre projet"
            name="projet"
            id=""
            cols="1"
            rows="3"
            v-model="nomProjet"
          />
          <input
            class="border-b-4 border-b-black placeholder:text-slate-500 placeholder:okinel"
            placeholder="Lien URL de votre Projets"
            name="Projet"
            id=""
            cols="1"
            rows="3"
            v-model="travaux"
          />
        </div>
      </div>
      <div class="flex justify-center hover:border-main-beige my-6">
        <Boutonc type="submit">Envoyer</Boutonc>
      </div>
    </section>

    <div class="flex justify-center items-center my-20">
      <a href="#top" class="m-auto text-center w-fit">
        <Boutonb
          onclick="location.reload()"
          @click.prevent="onDcnx()"
          class="m-auto text-center w-fit underline text-base"
        >
          Déconnexion
        </Boutonb>
      </a>
    </div>
  </main>

  <footer>
    <f />
  </footer>
</template>

<script>
window.onload = function () {
  window.scrollTo(0, 0);
};
// Bibliothèque Firestore : import des fonctions
// Fonctions Firestore

import {
  getFirestore,
  collection,
  doc,
  updateDoc,
  onSnapshot,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import {
  getAuth, // Fonction générale d'authentification
  signInWithEmailAndPassword, // Se connecter avec un email + mot de passe
  createUserWithEmailAndPassword, // créer un user
  signOut, // Se deconnecter
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

export default {
  data() {
    return {
      refUser: null, // Référence de l'user à modifier
      userInfo: null, //
      user: {
        mail: null,
        password: null,
      },
      uiduser: null,
      prenom: "", // PRENOM USER
      nom: "", // NOM USER
      pseudo: "", // PSEUDO USER
      soireeanniv: false, // PARTICIPATION OU NON SOIREE ANNIV 25 ANS
      participationdefi: false, // PARTICIPATION OU PAS DEFI
      benevoledefi: false, // BENEVOLE OU PAS DEFI
      visitedefi: false, // SIMPLE VISITE DU DEFI
      role: "", // ROLE DE L'USER
      admin: false, // Si l'utilisateur est ou non administrateur
      connect: true,
      nomEquipe: null,
      nomProjet: null,
      travaux: null,
    };
  },
  mounted() {
    this.getUserConnect();

    // Montage de la vue
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
    },

    Createproject() {
      const firestore = getFirestore();
      const dbProjet = collection(firestore, "Projet");
      const docRef = addDoc(dbProjet, {
        nomEquipe: this.nomEquipe,
        nomProjet: this.nomProjet,
        travaux: this.travaux,
      });
      console.log("Projet envoyer");
    },

    async getUserInfo(user) {
      // Rechercher les informations complémentaires de l'utilisateur
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "user");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uiduser", "==", user.uid));
      await onSnapshot(q, (snapshot) => {
        this.userInfo = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("userInfo", this.userInfo);
        // userInfo étant un tableau, onn récupère
        // ses informations dans la 1° cellule du tableau : 0
        this.uiduser = this.userInfo[0].uiduser;
        this.prenom = this.userInfo[0].prenom;
        this.nom = this.userInfo[0].nom;
        this.pseudo = this.userInfo[0].pseudo;
        this.soireeanniv = this.userInfo[0].soireeanniv;
        this.participationdefi = this.userInfo[0].participationdefi;
        this.benevoledefi = this.userInfo[0].benevoledefi;
        this.visitedefi = this.userInfo[0].visitedefi;
        this.role = this.userInfo[0].role;
      });
    },

    async updateUser() {
      const firestore = getFirestore();
      const docRef = doc(firestore, "user", this.userInfo[0].id);
      // Modification du participant à partir de son id
      await updateDoc(docRef, {
        uiduser: this.uiduser,
        prenom: this.prenom,
        nom: this.nom,
        pseudo: this.pseudo,
        soireeanniv: this.soireeanniv,
        participationdefi: this.participationdefi,
        benevoledefi: this.benevoledefi,
        visitedefi: this.visitedefi,
        role: this.role,
      });
      // redirection sur la liste des participants
      //
      this.$router.push("/");
    },

    onDcnx() {
      //se deco
      signOut(getAuth())
        .then((response) => {
          this.user = getAuth().currentUser;
          this.user = {
            email: null,
            password: null,
          };
        })
        .catch((error) => {
          console.log("erreur  déconnection : ", error);
        });
    },
  },
};
</script>

<script setup>
import Boutonb from " /components/bouton/boutonb.vue";
import Boutonc from " /components/bouton/Boutonc.vue";

import f from "/src/components/f.vue";
</script>
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
