<template>
  <main>
    <!--CONNEXION-->
    <!--CONNEXION-->
    <!--CONNEXION-->
    <!--CONNEXION-->
    <form
      class="border-4 my-5 md:my-20 border-black bg-white py-10 md:px-20 w-11/12 md:w-2/3 m-auto"
      @submit.prevent="onCnx()"
      v-if="formSwitch === false"
    >
      <div class="flex flex-col gap-12">
        <div class="flex flex-col">
          <label class="mmi-texte">Adresse mail</label>
          <input
            type="text"
            class="bg-white border border-b-4 border-b-black border-white"
            placeholder="mail"
            name="mail"
            v-model="user.email"
            required
          />
        </div>
        <div class="flex flex-col">
          <label class="mmi-texte">Mot de passe</label>
          <input
            type="password"
            class="bg-white border border-b-4 border-b-black border-white"
            placeholder="Password"
            name="Password"
            v-model="user.password"
            required
          />
        </div>

        <div class="flex place-content-center">
          <div
            class="alert alert-warning w-fit text-base bg-main-white"
            role="alert"
          >
            {{ message }}
          </div>
        </div>

        <div class="w-full flex flex-col md:flex-row md:justify-evenly">
          <Boutonb
            class="mx-auto bg-black border border-black border-1 p-7 text-2xl md:text-xl lg:text-2xl font-inter text-white font-black rounded-md"
            type="submit"
          >
            Se connecter
          </Boutonb>
          <Boutonb
            class="mx-auto bg-white border border-black border-1 p-7 text-2xl md:text-xl lg:text-2xl font-inter text-black font-black rounded-md"
            @click="formSwitch = !formSwitch"
          >
            Inscription
          </Boutonb>
        </div>
        <Boutonb class="m-auto text-center w-fit underline" @click="onDcnx()">
          Déconnexion
        </Boutonb>
      </div>
    </form>

    <!--INSCRIPTION-->
    <!--INSCRIPTION-->
    <!--INSCRIPTION-->
    <!--INSCRIPTION-->
    <form
      class="border-4 my-5 md:my-20 border-black bg-white py-10 md:px-20 w-11/12 md:w-2/3 m-auto"
      @submit.prevent="onSignup()"
      v-if="formSwitch === true"
    >
      <!--Images 24h 25 ans mmi-->
      <section></section>
      <div class="flex flex-col gap-12">
        <div class="flex flex-col">
          <label class="mmi-texte">Adresse mail</label>
          <input
            type="text"
            class="bg-white border border-b-4 border-b-black border-white"
            placeholder="mail"
            name="mail"
            v-model="user.email"
            required
          />
        </div>
        <div class="flex flex-col">
          <label class="mmi-texte">Prénom</label>
          <input
            type="text"
            class="bg-white border border-b-4 border-b-black border-white"
            placeholder="mail"
            name="mail"
            v-model="user.email"
            required
          />
        </div>
        <div class="flex flex-col">
          <label class="mmi-texte">Mot de passe</label>
          <input
            type="password"
            class="bg-white border border-b-4 border-b-black border-white"
            placeholder="Password"
            name="Password"
            v-model="user.password"
            required
          />
        </div>

        <div class="flex flex-col">
          <label class="okiner font-bold" for="Souhait"> Je souhaite</label>
          <div class="flex flex-row gap-1 my-1">
            <input type="checkbox" class="border-2 checked:bg-blue-500" />
            <p class="text-sm okinel text-black">
              PARTICIPER À LA SOIRÉE DES 25 ANS MMI
            </p>
          </div>
          <div class="flex flex-row gap-1 my-1">
            <input type="checkbox" class="border-2 checked:bg-blue-500" />
            <p class="text-sm okinel text-black">PARTICIPER AU DÉFI 24H</p>
          </div>
          <div class="flex flex-row gap-1 my-1">
            <input type="checkbox" class="border-2 checked:bg-blue-500" />
            <p class="text-sm okinel text-black">
              Revoir et discuter avec les anciens <br />
              étudiants et les professeurs <br />
              LORS DU DÉFI 24H
            </p>
          </div>
          <div class="flex flex-row gap-1 my-1">
            <input type="checkbox" class="border-2 checked:bg-blue-500" />
            <p class="text-sm okinel text-black">
              ÊTRE BÉNÉVOLE LORS DU DÉFI 24H
            </p>
          </div>
        </div>

        <div class="flex flex-col">
          <label class="okiner font-bold" for="Souhait"> JE SUIS :</label>

          <fieldset>
            <legend>Selectionner votre catégorie:</legend>

            <div>
              <input type="radio" id="actuel" name="selector" value="actuel" />
              <label class="mx-2 text-sm okiner text-black" for="actuel"
                >ACTUELLEMENT ÉTUDIANT (MMI 1/2 ou LPWD)</label
              >
            </div>

            <div>
              <input type="radio" id="ancien" name="selector" value="ancien" />
              <label class="mx-2 text-sm okiner text-black" for="ancien"
                >UN ANCIEN ÉTUDIANT</label
              >
            </div>
          </fieldset>
        </div>

        <div class="flex place-content-center">
          <div
            class="alert alert-warning w-fit text-base bg-main-white"
            role="alert"
          >
            {{ message }}
          </div>
        </div>

        <div class="w-full flex flex-col md:flex-row md:justify-evenly">
          <Boutonb
            class="mx-auto bg-black border border-black border-1 p-7 text-2xl md:text-xl lg:text-2xl font-inter text-white font-black rounded-md"
            type="submit"
          >
            S'inscrire
          </Boutonb>
          <Boutonb
            class="mx-auto bg-jaune border border-1 p-7 text-2xl md:text-xl lg:text-2xl font-inter text-black font-black rounded-md"
            @click="formSwitch = !formSwitch"
          >
            Déjà un compte ?
          </Boutonb>
        </div>
      </div>
    </form>
  </main>

  <footer>
    <f />
  </footer>
</template>

<script setup>
import Boutonb from "../components/bouton/boutonb.vue";
import f from "/src/components/f.vue";
</script>
<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

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
      message: null,
    };
  },
  mounted() {
    let user = getAuth().currentUser;
    if (user) {
      this.user = user;
      this.message = "user déjà connecté :" + this.user.email;
    } else {
      this.message = "user non connecté :" + this.user.email;
    }
  },
  methods: {
    onCnx() {
      //se connecter avec un mots de pass
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          console.log("user connect", response.user);
          this.user = response.user;
          this.message = "user connecter:" + this.user.email;
        })
        .catch((error) => {
          //erreur co
          console.log("erreur connect", error);
          this.message = "Erreur deco ";
        });
    },

    onSignup() {
      //se connecter avec un mots de pass
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          console.log("user connect", response.user);
          this.user = response.user;
          this.message = "user connecter:" + this.user.email;
        })
        .catch((error) => {
          //erreur co
          console.log("erreur connect", error);
          this.message = "Erreur deco ";
        });
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
          console.log("user  déconnect", this.user);
          this.message = "user non co ";
        })
        .catch((error) => {
          console.log("erreur  déconnect", error);
        });
    },
  },
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
