<script setup>
import timerr from "/src/components/timerr.vue";
import F from "/src/components/f.vue";
import rectradiant from "/src/components/svg/rectradiant.vue";
</script>

<template>
  <main class="min-h-screen">
    <h1
      class="lg:text-7xl lg:text-red-700 md:text-green-600 md:text-4xl text-2xl text-center athena"
    >
      Début du festival dans
    </h1>
    <timerr class="athena lg:text-7xl md:text-4xl h-32 text-xl"></timerr>

    <div class="flex flex-col items-start">
      <!-- évenement -->
      <div>
        <div
          class="flex py-4 items-center justify-evenly lg:justify-start gap-2"
        >
          <div>
            <h1 class="athena text-xl text-dark-blue pl-3">L'évenement</h1>
          </div>
          <div>
            <div
              class="border-2 w-36 lg:w-64 bg-dark-blue border-dark-blue"
            ></div>
          </div>
        </div>
        <div class="">
          
        </div>
      </div>
      <!-- animations -->
      <div class="flex py-4 items-center justify-evenly lg:justify-start gap-2">
        <div>
          <h1 class="athena text-xl text-dark-blue pl-3">Les animations</h1>
        </div>
        <div>
          <div
            class="border-2 w-36 lg:w-64 bg-dark-blue border-dark-blue"
          ></div>
        </div>
      </div>
      <!-- partenaires -->
      <div class="flex py-4 items-center justify-evenly lg:justify-start gap-2">
        <div>
          <h1 class="athena text-xl text-dark-blue pl-3">Nos partenaires</h1>
        </div>
        <div>
          <div
            class="border-2 w-36 lg:w-64 bg-dark-blue border-dark-blue"
          ></div>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <F />
  </footer>
</template>

<style>
.athena {
  font-family: "athenaregular";
}
.okiner {
  font-family: "made_okine_sans_personal_usRg";
}
</style>
