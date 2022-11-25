<script setup>
import Boutonc from "../components/bouton/boutonc.vue";
import f from "/src/components/f.vue";
</script>

<template>
  <main class="h-screen">
    <div>
      <div
        class="flex py-4 items-center justify-evenly lg:justify-center gap-2"
      >
        <div>
          <h1 class="athena text-3xl text-dark-blue pl-3">Classement</h1>
        </div>
        <div>
          <div
            class="border-2 w-24 lg:w-64 bg-dark-blue border-dark-blue"
          ></div>
        </div>
      </div>
      <p class="okiner font-bold text-xl m-3 my-5">
        Le défi n’ayant pas encore eu lieu, <br />
        le classement n'est pas encore disponible.
      </p>

      <router-link
        class="flex justify-center hover:border-main-beige my-6"
        to="/"
      >
        <Boutonc>Retour à l'acceuil </Boutonc>
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
</style>
