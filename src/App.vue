<script setup>
import { RouterLink, RouterView } from "vue-router";
import h from "../src/components/h.vue";
</script>

<template>
  <header>
    <h class="mt-0 w-full" />
  </header>
  <main>
    <RouterView  />
  </main>
</template>

<style scoped></style>
