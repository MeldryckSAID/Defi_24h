<script setup>
import Banderole from "../components/banderole.vue";
import Boutonc from "../components/bouton/boutonc.vue";
import f from "/src/components/f.vue";
</script>

<template>
  <main>
    <div>
      <div>
        <div class="flex mb-9 py-4 items-center justify-center">
          <div>
            <h1 class="athena text-3xl mb-3 text-dark-blue pl-3">Contact</h1>
            <div>
              <div class="border-2 w-3/4 bg-dark-blue border-dark-blue"></div>
            </div>
          </div>
        </div>
      </div>
      <Banderole></Banderole>
      <p class="okiner font-bold text-center m-2">
        Pour toute requête ou demande remplissez <br />
        le formulaire ci-dessous.
      </p>
      <div class="grid place-items-center">
        <div class="w-3/4 lg:w-1/2 md:w-1/2 flex flex-col">
          <div class="flex flex-col justify-center m-2">
            <textarea
              class="border-2 border-gray-300 placeholder:text-slate-500 placeholder:okinel"
              placeholder="Prénom"
              name="Prénom"
              id=""
              cols="10"
              rows="1"
            ></textarea>
          </div>
          <div class="flex flex-col justify-center m-2">
            <textarea
              class="border-2 border-gray-300 placeholder:text-slate-500 placeholder:okinel"
              placeholder="Nom"
              name="Nom"
              id=""
              cols="10"
              rows="1"
            ></textarea>
          </div>
          <div class="flex flex-col justify-center m-2">
            <textarea
              class="border-2 border-gray-300 placeholder:text-slate-500 placeholder:okinel"
              placeholder="Mail"
              name="Mail"
              id=""
              cols="10"
              rows="1"
            ></textarea>
          </div>
          <div class="flex flex-col justify-center m-2">
            <textarea
              class="border-2 border-gray-300 placeholder:text-slate-500 placeholder:okinel"
              placeholder="Votre Message"
              name="Message"
              id=""
              cols="1"
              rows="10"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="flex justify-center hover:border-main-beige my-6">
        <Boutonc>Envoyer</Boutonc>
      </div>
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
