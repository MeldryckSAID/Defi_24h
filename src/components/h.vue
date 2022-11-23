<script setup lang="ts">
import { ref } from "vue";
//import Logo from "./svg/logo.vue";
const menuVisible = ref(true);
console.log("menu fermer", menuVisible);
console.log("menu ouvert", !menuVisible);
</script>

<template>
  <div class="z-10 top-0">
    <!-- Menu responsive -->

    <div
      class="fixed h-screen w-screen overflow-y-hidden  bg-main-blue"
      :class="{ hidden: menuVisible }"
    >
      <div class="mt-4 flex justify-start">
        <button
          v-if="!menuVisible"
          v-on:click="menuVisible = !menuVisible"
          class="mx-4"
        >
          <img src="../assets/svg/menu_fermer.svg" alt="Menu Fermer" />
        </button>
      </div>
      <div class="flex justify-center">
        <div class="ml-8 mt-8 flex flex-col text-left athena text-2xl">
          <router-link class="hover:border-main-beige  text-white my-6" to="/"
            >Accueil 
          </router-link>

          <router-link class="hover:text-main-beige text-white my-6" to="/gal"
            >Galerie
          </router-link>

          <router-link class="hover:text-main-beige text-white my-6" to="/cla"
            >Classement
          </router-link>

          <router-link class="hover:text-main-beige text-white my-6" to="/who"
            >Qui sommes-nous
          </router-link>

          <router-link class="hover:text-main-beige text-white my-6" to="/cont"
            >Contact
          </router-link>

          <router-link
            class="hover:text-main-beige text-white my-6"
            to="/account"
            >Mon compte
          </router-link>
        </div>
      </div>
    </div>

    <!-- Menu desktop -->
    <div class="mb-5">
      <div class="hidden justify-between lg:flex lg:flex-col">
        <div
          class="grid grid-rows-1 grid-cols-3 justify-items-center border-black border-b-2 pb-4"
        >
          <RouterLink class="col-start-2" to="/">
            <img class="w-52" src="../assets/svg/logo.svg" alt="Notre Logo" />
            <!-- <Logo class="w-52 h-52"/> -->
          </RouterLink>
          <RouterLink class="col-start-3 items-end" to="/account">
            <img class="w-12 pt-4" src="../assets/svg/user.svg" alt="User acount" />
          </RouterLink>
        </div>
        <div class="flex justify-center pt-3">
          <div class="flex justify-evenly">
            <router-link
              class="hover:border-dark-blue hover:border-b-2 text-xl mx-4 text-black"
              to="/gal"
              >Galerie
            </router-link>

            <router-link
              class="hover:border-dark-blue hover:border-b-2 text-xl mx-4 text-black"
              to="/cla"
              >Classement
            </router-link>

            <router-link
              class="hover:border-dark-blue hover:border-b-2 text-xl mx-4 text-black"
              to="/who"
              >Qui sommes-nous</router-link
            >

            <router-link
              class="hover:border-dark-blue hover:border-b-2 text-xl mx-4 text-black"
              to="/cont"
              >Contact</router-link
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Menu Tablet -->
    <div class="mb-5">
      <div class="lg:hidden hidden justify-between md:flex md:flex-col">
        <div
          class="grid grid-rows-1 grid-cols-3 justify-items-center border-black border-b-2 pb-4"
        >
          <RouterLink class="col-start-2" to="/">
            <img class="w-52" src="../assets/svg/logo.svg" alt="Notre Logo" />
          </RouterLink>
          <RouterLink class="col-start-3 items-end" to="/account">
            <img src="../assets/svg/user.svg" alt="User acount" />
          </RouterLink>
        </div>
        <div class="flex justify-center pt-3">
          <div class="flex justify-around">
            <router-link
              class="hover:text-main-beige text-xl mx-4 text-black"
              to="/gal"
              >Galerie
            </router-link>

            <router-link
              class="hover:text-main-beige text-xl mx-4 text-black"
              to="/cla"
              >Classement
            </router-link>

            <router-link
              class="hover:text-main-beige text-xl mx-4 text-black"
              to="/who"
              >Qui sommes-nous</router-link
            >

            <router-link
              class="hover:text-main-beige text-xl mx-4 text-black"
              to="/cont"
              >Contact</router-link
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Parametre -->
    <div class="mb-12 lg:hidden md:hidden">
      <div class="flex justify-around border-black border-b-2 pb-4">
        <div class="mx-4 mt-4 flex-row flex">
          <button v-on:click="menuVisible = !menuVisible" class="mx-4">
            <img
              width="20"
              src="../assets/svg/barre_menu.svg"
              alt="Barre du menu"
            />
          </button>
          <div>
            <RouterLink to="/">
              <img class="w-28" src="../assets/svg/logo.svg" alt="Notre Logo" />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.athena {
  font-family: "athenaregular";
}
</style>
