<script>
 window.onload = function() {
        window.scrollTo(0, 0);
    }
import f from "/src/components/f.vue";
//import Boutonb from "/src/components/bouton/boutonb.vue";

import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

export default {
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
      this.message = "user deja connecter :" + this.user.email;
    } else {
      this.message = "user non connecter ;" + this.user.email;
    }
  },
  methods: {
    onCnx() {
      //se connecter avec un mots de pass
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          
          this.user = response.user;
          // Emission evenement de connexion
          emitter.emit("connectUser", { user: this.user });
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
          emitter.emit("deConnectUser", { user: this.user });
        })
        .catch((error) => {
          console.log("erreur  déconnect", error);
        });
    },
  },
};
</script>



<template>
  <main>
    <div class="flex flex-col justify-center items-center">
      <div class="bg-zebre w-full md:w-2/3 m-9 p-8">
        <div class="bg-white rounded-lg p-3">
          <!-- champs -->
          <h2 class="text-center okiner text-3xl">Connexion</h2>
          <form @submit.prevent="onCnx()">
            <div class="relative z-20 flex flex-col w-full">
              <div class="flex flex-col justify-center m-2">
                <label class="okiner" for="Mail">Mail </label>

                <input
                  type="text"
                  class="border-2 rounded-2xl border-gray-300 placeholder:text-slate-500 placeholder:okinel"
                  placeholder="mail"
                  name="mail"
                  v-model="user.email"
                  required
                />
              </div>

              <div class="flex flex-col justify-center mb-4">
                <label class="okiner" for="Password">Mots de passe </label>

                <input
                  type="text"
                  class="border-2 rounded-2xl border-gray-300 placeholder:text-slate-500 placeholder:okinel"
                  placeholder="Password"
                  name="Password"
                  v-model="user.password"
                  required
                />
              </div>
            </div>
            <div class="flex place-content-center m-4">
              <div
                class="alert alert-warning w-fit text-xs bg-main-beige p-3"
                role="alert"
              >
                {{ message }}
              </div>
            </div>
            <div class="flex justify-around">
              <div class="">
                <boutonb
                  onclick="location.reload()"
                  @click="onDcnx()"
                  type="submit"
                >
                  Déconnexion
                </boutonb>
              </div>

              <div class="">
                <boutonb type="submit"> Connexion </boutonb>
              </div>
            </div>
          </form>
        </div>
      </div>
      <router-link to="/account">
        <boutonb class="w-fit mb-9 p-8">Je Minscris</boutonb>
      </router-link>
    </div>
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

.okineb {
  font-family: made_okine_sans_personal_usBd;
}
</style>
