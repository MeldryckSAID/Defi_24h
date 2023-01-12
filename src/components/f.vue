<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
  <footer class="bg-main-blue h-1/4 py-5">
    <div class="flex flex-col justify-center items-center">
      <h2
        v-if="$route.name != 'inscription'"
        class="athena text-main-beige m-5 text-center text-3xl"
      >
        Festival 24H
      </h2>

      <img
        class="w-fit"
        v-if="($route.name === 'inscription', 'account')"
        src="../assets/svg/collab_collor.svg"
        alt="Notre Logo en collaboration"
      />
      <div class="flex flex-row">
        <a
          class="text-white text-lg m-3 flex justify-center"
          href="mailto:mmi25ans@gmail.com"
          >mmi25ans@gmail.com</a
        >
        <a
          v-if="($route.name === 'inscription', 'account')"
          class="text-main-beige text-lg m-3 flex justify-center"
          href="mailto:mmidefi24h@gmail.com"
          >mmidefi24h@gmail.com</a
        >
      </div>
    </div>
    <!-- footer  -->
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
      <div class="pl-4 py-4 gap-3 flex flex-row">
        <img
          class="w-12 lg:w-16 md:w-12"
          src="../assets/svg/instagram.svg"
          alt="Notre Instagram"
        />
        <img
          class="w-10 lg:w-14 md:w-10"
          src="../assets/svg/facebook.svg"
          alt="Notre Facebook"
        />
        <img
          class="w-12 lg:w-16 md:w-12"
          src="../assets/svg/logo-mmi.svg"
          alt="Logo département MMi"
        />
      </div>
    </div>

    <!-- footer pc -->
    <div
      class="lg:flex lg:flex-col lg:justify-around lg:items-center hidden md:hidden"
    >
      <div class="pl-4 py-4 flex flex-row gap-2">
        <img
          class="lg:w-16 md:w-14"
          src="../assets/svg/instagram.svg"
          alt="Notre Instagram"
        />
        <img
          class="lg:w-14 md:w-14"
          src="../assets/svg/facebook.svg"
          alt="Notre Facebook"
        />
        <img
          class="lg:w-16 md:w-14"
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
