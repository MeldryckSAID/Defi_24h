<script setup>
import f from "/src/components/f.vue";
import Boutonb from "../components/bouton/boutonb.vue";
</script>

<template>
  <main>
    <div class="flex flex-col justify-center items-center">
      <div class="bg-zebre m-9 p-8">
        <div class="bg-white rounded-lg p-3">
          <!-- champs -->
          <h2 class="text-center okiner text-3xl">Inscription</h2>
          <div class="relative z-20 flex flex-col w-3/4">
            <div class="flex flex-col justify-center">
              <label class="okiner" for="Prénom">Prénom </label>
              <textarea
                class="border-2 rounded-2xl border-gray-300 placeholder:text-slate-500 placeholder:okinel"
                placeholder="Prénom"
                name="Prénom"
                id=""
                cols="1"
                rows="1"
              ></textarea>
            </div>
            <div class="flex flex-col justify-center m-2">
              <label class="okiner" for="Nom">Nom </label>
              <textarea
                class="border-2 rounded-2xl border-gray-300 placeholder:text-slate-500 placeholder:okinel"
                placeholder="Nom"
                name="Nom"
                id=""
                cols="1"
                rows="1"
              ></textarea>
            </div>
            <div class="flex flex-col justify-center m-2">
              <label class="okiner" for="Mail">Mail </label>

              <textarea
                class="border-2 rounded-2xl border-gray-300 placeholder:text-slate-500 placeholder:okinel"
                placeholder="Mail"
                name="Mail"
                id=""
                cols="1"
                rows="1"
              ></textarea>
            </div>
          </div>
          <!-- fin -->

          <!-- souhait -->
          <div class="flex flex-col">
            <label class="okiner font-bold" for="Souhait"> Je souhaite</label>
            <div class="flex flex-row gap-1 my-1">
              <input type="checkbox" class="border-2 checked:bg-blue-500" />
              <p class="text-sm okinel text-black">
                PARTICIPER À LA SOIRÉE DES 25 ANS MMI
              </p>
            </div>
            <div class="flex flex-row gap-1 my-1">
              <input type="checkbox" class="border-2 checked:bg-blue-500" />
              <p class="text-sm okinel text-black">PARTICIPER AU DÉFI 24H</p>
            </div>
            <div class="flex flex-row gap-1 my-1">
              <input type="checkbox" class="border-2 checked:bg-blue-500" />
              <p class="text-sm okinel text-black">
                Revoir et discuter avec les anciens <br />
                étudiants et les professeurs <br />
                LORS DU DÉFI 24H
              </p>
            </div>
            <div class="flex flex-row gap-1 my-1">
              <input type="checkbox" class="border-2 checked:bg-blue-500" />
              <p class="text-sm okinel text-black">
                ÊTRE BÉNÉVOLE LORS DU DÉFI 24H
              </p>
            </div>
          </div>
          <!-- fin -->

          <!-- je suis  -->

          <div class="flex flex-col">
            <label class="okiner font-bold" for="Souhait"> JE SUIS :</label>

            <fieldset>
              <legend>Selectionner votre catégorie:</legend>

              <div>
                <input
                  type="radio"
                  id="actuel"
                  name="selector"
                  value="actuel"
                />
                <label class="mx-2 text-sm okiner text-black" for="actuel"
                  >ACTUELLEMENT ÉTUDIANT (MMI 1/2 ou LPWD)</label
                >
              </div>

              <div>
                <input
                  type="radio"
                  id="ancien"
                  name="selector"
                  value="ancien"
                />
                <label class="mx-2 text-sm okiner text-black" for="ancien"
                  >UN ANCIEN ÉTUDIANT</label
                >
              </div>
            </fieldset>
          </div>
          <!-- fin -->

          <div class="flex justify-center">
            <boutonb> Inscription </boutonb>
          </div>
        </div>
      </div>
      <router-link to="/conexion">
        <boutonb class="mb-9 p-8">J'ai un compte</boutonb>
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

.okineb {
  font-family: made_okine_sans_personal_usBd;
}
</style>
