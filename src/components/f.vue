<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
  <footer class="bg-main-blue h-1/4 py-5">
    <h2 class="athena text-main-beige text-center text-2xl">Festival 24H</h2>
    <a
      class="text-white text-lg flex justify-center"
      href="mailto:mmidefi24h@gmail.com"
      >mmidefi24h@gmail.com</a
    >

    <div class="flex flex-col  lg:hidden md:flex-row md:justify-evenly">
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
          class="lg:w-16 md:w-14"
          src="../assets/svg/instagram.svg"
          alt="Notre Instagram"
        />
        <img
          class="lg:w-16 md:w-14"
          src="../assets/svg/discorde.svg"
          alt="Notre Discord"
        />
        <img
          class="lg:w-16 md:w-14"
          src="../assets/svg/logo-mmi.svg"
          alt="Logo département MMi"
        />
      </div>
    </div>

    <div class="lg:flex lg:flex-row lg:justify-around lg:items-center hidden md:hidden">
      <div class="flex gap-7">
        <RouterLink class="text-white text-lg text-center hover:text-main-beige" to="/mention">
          Mentions Légales
        </RouterLink>

        <RouterLink class="text-white text-lg text-center hover:text-main-beige" to="/mention">
          Condition générales d'utilisation
        </RouterLink>

        <RouterLink class="text-white text-lg text-center hover:text-main-beige" to="/cont">
          Contact
        </RouterLink>

        <RouterLink class="text-white text-lg text-center hover:text-main-beige" to="/who">
          Qui sommes nous
        </RouterLink>
      </div>

      <div class="pl-4 py-4 flex flex-row gap-2">
        <img
          class="lg:w-16 md:w-14  "
          src="../assets/svg/instagram.svg"
          alt="Notre Instagram"
        />
        <img
          class="lg:w-16 md:w-14 "
          src="../assets/svg/discorde.svg"
          alt="Notre Discord"
        />
        <img
          class="lg:w-16 md:w-14 "
          src="../assets/svg/logo-mmi.svg"
          alt="Logo département MMi"
        />
      </div>
    </div>

    <p class="pl-4 text-left text-white lg:text-center md:text-center">
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
