<script setup>
import timerr from "/src/components/timerr.vue";
import F from "/src/components/f.vue";
</script>

<template>
  <main class="min-h-screen">
    <h1
      class="lg:text-7xl lg:text-red-700 md:text-green-600 md:text-4xl text-2xl text-center athena"
    >
      Début du festival dans
    </h1>
    <timerr class="athena lg:text-7xl md:text-4xl h-32 text-xl"></timerr>

    <div class="flex items-center justify-evenly gap-2">
      
        <div>
          <h1 class="athena text-3xl text-dark-blue pl-3">L'évenement</h1>
        </div>
        <!-- <span class="w-1/2 left-6  border-b-2 border-dark-blue" /> -->
        <div>
          <div class="border-2  w-36 bg-dark-blue border-dark-blue"></div>
        </div>
        <!-- <div class="w-1/2 h-0 border-2 border-dark-blue"></div> -->
      
      
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
