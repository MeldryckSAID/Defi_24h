<template>
  <!--CONNEXION-->
  <!--CONNEXION-->
  <!--CONNEXION-->
  <!--CONNEXION-->
  <div class="flex justify-center">
    <form
      class="border-4 my-5 md:rounded-lg md:m-8 shadow-xl shadow-zinc-900 bg-white py-5 px-5 md:px-10 w-11/12 md:w-2/3 m-auto"
      @submit.prevent="onCnx()"
      v-if="formSwitch === false"
    >
      <!--Images 24h 25 ans mmi-->
      <section class="flex justify-center items-center my-5 gap-5">
        <img src="../assets/svg/logo_collab.svg" alt="collaboration" />
      </section>
      <!--Images 24h 25 ans mmi-->
      <div class="flex justify-center">
        <div class="w-fit mb-5 border-b-2 border-black gap-5">
          <Boutona class="border-b-4 border-black" type="submit">
            Connexion
          </Boutona>
          <Boutona class="" @click="formSwitch = !formSwitch">
            Inscription
          </Boutona>
        </div>
      </div>
      <div class="flex flex-col gap-12">
        <div class="flex flex-col">
          <label class="font-black">Adresse mail</label>
          <input
            type="text"
            class="bg-white border border-b-4 border-b-black border-white"
            placeholder="Mail"
            name="mail"
            v-model="user.email"
            required
          />
        </div>
        <div class="flex flex-col">
          <label class="font-black">Mot de passe</label>
          <input
            type="password"
            class="bg-white border border-b-4 border-b-black border-white"
            placeholder="Password"
            name="Password"
            v-model="user.password"
            required
          />
        </div>

        <Boutonb
          class="mx-auto border-1 p-7 text-2xl md:text-xl lg:text-2xl font-inter text-white font-black rounded-md"
          type="submit"
        >
          Se connecter
        </Boutonb>
        <div class="flex place-content-center">
          <div class="alert alert-warning w-fit" role="alert">
            {{ message }}
          </div>
        </div>

        <a class="m-auto text-center w-fit">
          <Boutonb
            onclick="location.reload()"
            @click.prevent="onDcnx()"
            class="m-auto text-center w-fit"
          >
            Déconnexion
          </Boutonb>
        </a>
      </div>
    </form>
  </div>
  <!--INSCRIPTION-->
  <!--INSCRIPTION-->
  <!--INSCRIPTION-->
  <!--INSCRIPTION-->
  <div class="flex justify-center">
    <form
      class="border-4 my-5 md:my-20 md:rounded-lg md:m-8 shadow-xl shadow-zinc-900 py-10 px-5 md:px-20 w-11/12 md:w-2/3 m-auto"
      @submit.prevent="createAccount()"
      v-if="formSwitch === true"
    >
      <!--Images 24h 25 ans mmi-->
      <section class="flex justify-center items-center my-5 gap-5">
        <img src="../assets/svg/logo_collab.svg" alt="collaboration" />
      </section>
      <!--Images 24h 25 ans mmi-->

      <div class="flex justify-center">
        <div class="w-fit mb-5 border-b-2 border-black gap-5">
          <Boutona type="submit" @click="formSwitch = !formSwitch">
            Connexion</Boutona
          >
          <Boutona class="border-b-4 border-black"> Crée un compte </Boutona>
        </div>
      </div>

      <div class="flex flex-col gap-10 w-full mb-5">
        <!--PARTIE 1 DU FORMULAIRE-->
        <div>
          <div class="flex flex-col">
            <label class="font-black">Adresse mail*</label>
            <input
              type="text"
              class="bg-white border border-b-4 border-b-black border-white"
              placeholder="Mail"
              name="mail"
              v-model="user.email"
              required
            />
          </div>

          <div class="flex flex-col">
            <label class="font-black">Mot de passe*</label>
            <input
              type="password"
              class="bg-white border border-b-4 border-b-black border-white"
              placeholder="Mot de passe"
              name="Password"
              v-model="user.password"
              required
            />
          </div>

          <div class="flex flex-col">
            <label class="font-black">Prénom*</label>
            <input
              type="text"
              class="bg-white border-b-4 border-b-black"
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
              class="bg-white border-b-4 border-b-black"
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
              class="bg-white border-b-4 border-b-black"
              placeholder="Pseudonyme"
              name="pseudo"
              v-model="pseudo"
            />
          </div>
        </div>
        <!--PARTIE 1 DU FORMULAIRE-->
        <!--Partie 2-->

        <div class="md:flex">
          <div>
            <!--Je souhaite...-->

            <h2 class="text-2xl md:text-3xl font-black">Je souhaite...</h2>
            <section class="flex flex-col gap-2">
              <div>
                <div
                  class="grid grid-cols-[2%,98%] justify-items-start p-4 gap-5 items-center w-full"
                >
                  <input
                    type="checkbox"
                    class="w-5 h-5"
                    name="soireeanniv"
                    v-model="soireeanniv"
                  />
                  <label class="uppercase"
                    >PARTICIPER À LA SOIRÉE DES 25 ANS MMI</label
                  >
                </div>

                <div
                  class="grid grid-cols-[2%,98%] justify-items-start p-4 gap-5 items-center w-full"
                >
                  <input
                    type="checkbox"
                    class="w-5 h-5"
                    v-model="participationdefi"
                  />
                  <label class="uppercase">PARTICIPER AU DÉFI 24H</label>
                </div>
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
                  Revoir et discuter avec les anciens étudiants et les
                  professeurs LORS DU DÉFI 24H</label
                >
              </div>
            </section>
          </div>

          <!--PARTIE 3-->
          <div>
            <h2 class="text-2xl md:text-3xl font-black">Je suis...</h2>
            <!--PARTIE 3-->
            <section class="flex flex-col gap-2">
              <div
                class="grid grid-cols-[2%,98%] justify-items-start p-4 gap-5 items-center w-full"
              >
                <input
                  type="radio"
                  class="w-5 h-5"
                  v-model="role"
                  value="etudiant"
                />
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
            </section>
          </div>
        </div>

        <section>
          <h2 class="text-2xl md:text-5xl font-black text-bleu mb-5">Equipe</h2>
          <div>
            <div class="flex gap-5 mb-5">
              <div>
                <input
                  type="radio"
                  id="radio1"
                  value="option1"
                  v-model="selectedOption"
                />
                <label for="radio1">Rejoindre une équipe</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="radio2"
                  value="option2"
                  v-model="selectedOption"
                />
                <label for="radio2">Créer une équipe</label>
              </div>
            </div>
            <div>
              <div v-if="selectedOption === 'option1'"> sélection equipe</div>
              <div v-if="selectedOption === 'option2'">
                <div class="flex flex-col mb-4">
                  <label class="font-black">Nom d’équipe</label>
                  <input
                    type="text"
                    class="bg-white border border-b-4 border-b-black border-white"
                    placeholder="Nom de votre équipe"
                    name="Equipe"
                  />
                  <!-- a placer en haut pour crée lequipe v-model="equipe.nom"
                    required -->
                </div>

                <div class="flex flex-col">
                  <label class="font-black">Membres de d’équipe</label>
                  <input
                    type="text"
                    class="bg-white border border-b-4 border-b-black border-white"
                    placeholder="Membres de  d’équipe"
                    name="Membres"
                  />
                  <!-- a placer en haut pour crée lequipe v-model="equipe.membre"
                    required -->
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          class="grid grid-cols-[2%,98%] justify-items-start p-4 gap-5 items-center w-full"
        >
          <input
            type="checkbox"
            required
            class="w-5 h-5"
            v-model="connect"
            value="autre-que-etudiant"
          />
          <label>J'accepte les conditions généraled'utilisation</label>
        </div>

        <!--Finalisation-->

        <div class="flex place-content-center">
          <div class="alert alert-warning w-fit" role="alert">
            {{ message }}
          </div>
        </div>

        <div class="flex justify-center">
          <Boutonb
            class="border-1 p-7 text-2xl md:text-xl lg:text-2xl font-inter text-white font-black rounded-md"
            type="submit"
          >
            S'inscrire
          </Boutonb>
        </div>
      </div>
    </form>
  </div>

  <footer>
    <f />
  </footer>
</template>

<script setup>
import Boutonb from "/src/components/bouton/boutonb.vue";
//import Boutona from "/src/components/bouton/boutona.vue";

import f from "/src/components/f.vue";
</script>

<script>
// choix equipe hidden

//animation trait


import Boutona from "../components/bouton/boutona.vue";
import {
  getAuth, // Fonction générale d'authentification
  signInWithEmailAndPassword, // Se connecter avec un email + mot de passe
  createUserWithEmailAndPassword, // créer un user
  signOut, // Se deconnecter
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

// Fonctions Firestore
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export default {
  props: {
    formSwitch: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      uid: "",
      prenom: null,
      nom: null,
      pseudo: null,
      soireeanniv: false,
      participationdefi: false,
      benevoledefi: false,
      visitedefi: false,
      role: "autre",
      admin: false,
      connect: true,
      message: null,
      selectedOption: null,
    };
  },
  mounted() {
    let user = getAuth().currentuser;
    if (user) {
      this.user = user;
      this.message = "Vous êtes connecté sous : " + this.user.email;
    } else {
      this.message = "Connectez-vous.";
    }
  },
  methods: {
    onCnx() {
      //se connecter avec un mots de pass
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          this.user = response.user;
          this.message = "Vous êtes connecté sous : " + this.user.email;
          this.$router.push("/");
        })
        .catch((error) => {
          //erreur co
          this.message = "Erreur connexion :" + error;
        });
    },
    createAccount() {
      // Se connecter avec user et mot de passe
      createUserWithEmailAndPassword(
        getAuth(),
        this.user.email,
        this.user.password
      )
        .then((response) => {
          this.message = "user créé : " + this.user.email;
          this.uid = response.user.uid;
          const firestore = getFirestore();
          const dbusers = collection(firestore, "user");
          const docRef = addDoc(dbusers, {
            nom: this.nom,
            prenom: this.prenom,
            pseudo: this.pseudo,
            soireeanniv: this.soireeanniv,
            participationdefi: this.participationdefi,
            benevoledefi: this.benevoledefi,
            visitedefi: this.visitedefi,
            admin: false,
            connect: true,
            role: this.role,
            uiduser: this.uid,
          });
          signInWithEmailAndPassword(
            getAuth(),
            this.user.email,
            this.user.password
          ).then((response) => {
            this.user = response.user;
            this.message =
              "Vous êtes connecté sous : " +
              this.user.email +
              "(votre UID : " +
              this.uid +
              " )";
          });
          this.$router.push("/");
        })
        .catch((error) => {
          // Erreur de connexion
          this.message = "Erreur pour la création du compte : " + error;
        });
    },
    onDcnx() {
      //se deco
      signOut(getAuth())
        .then((response) => {
          this.user = getAuth().currentuser;
          this.user = {
            email: null,
            password: null,
          };
          this.message = "Vous êtes déconnecté !";
        })
        .catch((error) => {
          console.log("erreur  déconnection : ", error);
        });
    },
  },
  components: { Boutona },
};
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

.okineb {
  font-family: "made_okine_sans_personal_usBd";
}
</style>
