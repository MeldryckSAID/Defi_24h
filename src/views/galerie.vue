<script setup>
import F from "/src/components/f.vue";
</script>

<script>
window.onload = function () {
  window.scrollTo(0, 0);
};
</script>

<template>
  <main>
    <div>
      <div class="flex mb-9 py-4 items-center justify-center">
        <div>
          <h1 class="athena text-3xl mb-3 text-dark-blue pl-3">Galerie</h1>
          <div>
            <div class="border-2 w-3/4 bg-dark-blue border-dark-blue"></div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="flex mb-9 py-4 items-center justify-center">
        <div>
          <h2 class="athena text-2xl mb-3 text-dark-blue pl-3">
            Les projets de l’année dernière
          </h2>
          <div>
            <div class="border-2 w-3/4 bg-dark-blue border-dark-blue"></div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="md:grid md:grid-rows-3 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 my-5"
    >
      <div>
        <figure>
          <router-link class="" to="/lorem">
            <img
              class="w-full"
              src="../assets/webp/LesProjets.webp"
              alt="Lorem Ipsum"
            />
          </router-link>
          <figcaption></figcaption>
        </figure>
      </div>

      <div>
        <figure>
          <router-link class="" to="/lapin">
            <img
              class="w-full"
              src="../assets/webp/LesProjets2.webp"
              alt="Lapin de Garenne"
            />
          </router-link>

          <figcaption></figcaption>
        </figure>
      </div>

      <div>
        <figure>
          <router-link class="" to="/buro">
            <img
              class="w-full"
              src="../assets/webp/LesProjets3.webp"
              alt="LeBureau"
            />
          </router-link>

          <figcaption></figcaption>
        </figure>
      </div>

      <div>
        <figure>
          <router-link class="" to="/zinzin">
            <img
              class="w-full"
              src="../assets/webp/LesProjets4.webp"
              alt="Les Zinzins de l’espace"
            />
          </router-link>

          <figcaption></figcaption>
        </figure>
      </div>

      <div>
        <figure>
          <router-link class="" to="/Sacimder">
            <img
              class="w-full"
              src="../assets/webp/LesProjets5.webp"
              alt="Sacimder"
            />
          </router-link>

          <figcaption></figcaption>
        </figure>
      </div>

      <div>
        <figure>
          <router-link class="" to="/">
            <img
              class="w-full"
              src="../assets/webp/LesProjets6.webp"
              alt="Arnaque"
            />
          </router-link>

          <figcaption></figcaption>
        </figure>
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
</style>
