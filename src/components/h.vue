<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
//import Logo from "./svg/logo.vue";
const menuVisible = ref(true);
console.log("menu fermer", menuVisible);
console.log("menu ouvert", !menuVisible);
</script>

<template>
  <div class="relative z-50 inset-0">
    <!-- Menu responsive -->

    <div
      class="fixed h-screen w-screen overflow-y-hidden bg-main-blue"
      v-on:click="menuVisible = !menuVisible"
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
          <router-link
            class="hover:border-main-beige text-white my-6"
            to="/"
            :class="{ 'text-main-beige': $route.name === 'home' }"
            >Accueil
          </router-link>

          <router-link
            class="hover:text-main-beige text-white my-6"
            to="/gal"
            :class="{ 'text-main-beige': $route.name === 'galerie' }"
            >Galerie
          </router-link>

          <router-link
            class="hover:text-main-beige text-white my-6"
            to="/cla"
            :class="{ 'text-main-beige': $route.name === 'classement' }"
            >Classement
          </router-link>

          <router-link
            class="hover:text-main-beige text-white my-6"
            to="/who"
            :class="{ 'text-main-beige': $route.name === 'who' }"
            >Qui sommes-nous
          </router-link>

          <router-link
            class="hover:text-main-beige text-white my-6"
            to="/cont"
            :class="{ 'text-main-beige': $route.name === 'contact' }"
            >Contact
          </router-link>

          <router-link
            class="hover:text-main-beige text-white my-6"
            to="/account"
            :class="{ 'text-main-beige': $route.name === 'account' }"
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
            
              <img  class="w-28" v-if="$route.name != 'inscription'" src="../assets/svg/logo.svg" alt="Notre Logo" />
              <img  class="w-40" v-if="$route.name === 'inscription'" src="../assets/svg/logo_collab.svg" alt="Notre Logo en collaboration" />
           
          </RouterLink>
          <RouterLink class="col-start-3 items-end" to="/account">
            <img
              class="w-12 pt-4"
              src="../assets/svg/user.svg"
              alt="User acount"
            />
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
            <RouterLink    to="/">
              <img  class="w-28" v-if="$route.name != 'inscription'" src="../assets/svg/logo.svg" alt="Notre Logo" />
              <img  class="w-40" v-if="$route.name === 'inscription'" src="../assets/svg/logo_collab.svg" alt="Notre Logo en collaboration" />
            </RouterLink>
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
            <RouterLink    to="/">
              <img  class="w-28" v-if="$route.name != 'inscription'" src="../assets/svg/logo.svg" alt="Notre Logo" />
              <img  class="w-40" v-if="$route.name === 'inscription'" src="../assets/svg/logo_collab.svg" alt="Notre Logo en collaboration" />
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
