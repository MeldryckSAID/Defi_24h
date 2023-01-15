<script setup>
import Boutonc from "@/components/bouton/boutonc.vue";

import tablecss from "@/components/tablecss.vue";
import f from "/src/components/f.vue";
</script>

<script>
window.onload = function () {
  window.scrollTo(0, 0);
};
</script>

<template>
  <main class="h-screen">
    <div>
      <div>
        <div class="flex mb-9 py-4 items-center justify-center">
          <div>
            <h1 class="athena text-3xl mb-3 text-dark-blue pl-3">Classement</h1>
            <div>
              <div class="border-2 w-3/4 bg-dark-blue border-dark-blue"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- pas encore d'équipe  -->
      <!-- <div>
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
      </div> -->
      <div>
        <div>
          <p class="okiner text-xl m-3 my-5">
            Découvrez le classement de votre équipe !
          </p>

          <tablecss></tablecss>
        </div>
       
      </div>
    </div>
  </main>

  <footer class="mt-36">
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
