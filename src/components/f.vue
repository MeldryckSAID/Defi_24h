<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
  <footer class="bg-main-blue h-1/4 py-5">
    <h2 class="athena text-main-beige m-5 text-center text-3xl">
      Festival 24H
    </h2>
    <a
      class="text-white text-lg m-3 flex justify-center"
      href="mailto:mmidefi24h@gmail.com"
      >mmidefi24h@gmail.com</a
    >

    <div class="flex flex-col lg:hidden md:flex-row md:justify-evenly">
      <ul class="pl-4 py-4">
        <li>
          <RouterLink class="text-white text-lg text-center" to="/mention">
            Mentions Légales
          </RouterLink>
        </li>
        <li>
          <RouterLink class="text-white text-lg text-center" to="/mention">
            Condition générales d'utilisation
          </RouterLink>
        </li>
        <li>
          <RouterLink class="text-white text-lg text-center" to="/cont">
            Contact
          </RouterLink>
        </li>
        <li>
          <RouterLink class="text-white text-lg text-center" to="/who">
            Qui sommes nous
          </RouterLink>
        </li>
      </ul>
      <div class="pl-4 py-4 flex flex-row">
        <img
          class="lg:w-10 md:w-14"
          src="../assets/svg/instagram.svg"
          alt="Notre Instagram"
        />
        <img
          class="lg:w-12 md:w-14"
          src="../assets/svg/discorde.svg"
          alt="Notre Discord"
        />
        <img
          class="lg:w-14 md:w-14"
          src="../assets/svg/logo-mmi.svg"
          alt="Logo département MMi"
        />
      </div>
    </div>

    <div
      class="lg:flex lg:flex-col lg:justify-around lg:items-center hidden md:hidden"
    >
      <div class="pl-4 py-4 flex flex-row gap-2">
        <img
          class="lg:w-10 md:w-14"
          src="../assets/svg/instagram.svg"
          alt="Notre Instagram"
        />
        <img
          class="lg:w-10 md:w-14"
          src="../assets/svg/facebook.svg"
          alt="Notre Facebook"
        />
        <img
          class="lg:w-10 md:w-14"
          src="../assets/svg/logo-mmi.svg"
          alt="Logo département MMi"
        />
      </div>
      <div class="flex m-5 gap-7">
        <RouterLink
          class="text-white text-lg text-center hover:text-main-beige"
          to="/mention"
        >
          Mentions Légales
        </RouterLink>

        <RouterLink
          class="text-white text-lg text-center hover:text-main-beige"
          to="/mention"
        >
          Condition générales d'utilisation
        </RouterLink>

        <RouterLink
          class="text-white text-lg text-center hover:text-main-beige"
          to="/cont"
        >
          Contact
        </RouterLink>

        <RouterLink
          class="text-white text-lg text-center hover:text-main-beige"
          to="/who"
        >
          Qui sommes nous
        </RouterLink>
      </div>
    </div>

    <p class="pl-4 text-sm text-left text-white lg:text-center md:text-center">
      Exercice réalisé dans le cadre d'un exercice pédagogique au
      <span class="text-main-beige"> département MMI de Montbéliard</span>
    </p>
  </footer>
</template>

<style>
.athena {
  font-family: "athenaregular";
}
</style>
