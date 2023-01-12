<script setup>
import f from "/src/components/f.vue";
import Boutonb from "../components/bouton/boutonb.vue";

import {getAuth, signInWithEmailAndPassword, signOut, } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";


export default{
    data(){
        return {
            user:{
                email:null,
                password
            },
            message:null
        }
    },
    mounted(){
        let user = getAuth().currentUser;
        if(user){
            this.user=user;
            this.message= "user deja co :" + this.user.email;
        }else{
            this.message="user non co ;"+this.user.email
        }
    },
        methods:{
            onCnx(){
                //se connecter avec un mots de pass
                signInWithEmailAndPassword(getAuth(),this.user.email , this.user.password)
                .then((response)=>{
                    console.log('user connect', response.user);
                    this.user= response.user;
                    this.message= "user connecter:" +this.user.email
                })
                .catch((error)=>{
                    //erreur co
                     console.log('erreur connect', error);
                     this.message = "Erreur deco ";
                })
            },

            onDcnx(){
                //se deco
                signOut(getAuth())
                .then(response=>{
                    this.user = getAuth().currentUser;
                    this.user= {
                        email:null,
                        password:null
                    };
                    console.log('user  déconnect', this.user);
                     this.message = "user non co ";

                })
                .catch(error=>{
                      console.log('erreur  déconnect', error);
                })
            }
        }
    
}
</script>

<template>
  <main>
    <div class="flex flex-col justify-center items-center">
      <div class="bg-zebre w-full md:w-2/3 m-9 p-8">
        <div class="bg-white rounded-lg p-3">
          <!-- champs -->
          <h2 class="text-center okiner text-3xl">Connexion</h2>
          <div class="relative z-20 flex flex-col w-full">
            <div class="flex flex-col justify-center m-2">
              <label class="okiner" for="Mail">Mail </label>

              <textarea
                class="border-2 rounded-2xl border-gray-300 placeholder:text-slate-500 placeholder:okinel"
                placeholder="Mail"
                name="Mail"
                id=""
                cols="1"
                rows="1"
              ></textarea>
            </div>

            <div class="flex flex-col justify-center mb-4">
              <label class="okiner" for="Password">Mots de passe </label>
              <textarea
                class="border-2 rounded-2xl border-gray-300 placeholder:text-slate-500 placeholder:okinel"
                placeholder="Password"
                name="Password"
                id=""
                cols="1"
                rows="1"
              ></textarea>
            </div>
          </div>

          <div class="flex justify-center">
            <boutonb> Connexion </boutonb>
          </div>
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
