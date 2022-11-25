<script setup>
import f from "/src/components/f.vue";
</script>

<template>
  <main class="min-h-screen my-3">
    <div>
      <!-- qui sommes nous  -->
      <div>
        <div
          class="flex py-4 items-center justify-evenly lg:justify-start gap-2"
        >
          <div>
            <h1 class="athena text-3xl text-dark-blue pl-3">
              Qui sommes nous ?
            </h1>
          </div>
          <div>
            <div
              class="border-2 w-12 lg:w-64 bg-dark-blue border-dark-blue"
            ></div>
          </div>
        </div>
      </div>
      <!-- le defie -->
      <div>
        <div class="flex py-4 items-center justify-evenly gap-2">
          <div>
            <div
              class="border-2 w-32 lg:w-64 bg-dark-blue border-dark-blue"
            ></div>
          </div>
          <div>
            <h1 class="athena text-3xl text-dark-blue pl-3">Le défie 24h</h1>
          </div>
        </div>
        <p class="okiner px-3 text-left">
          Étudiants en 2ème année de MMI, notre objectif commun est d’acquérir
          le plus de connaissances possible en communication, création
          numérique, développement web et audio-visuelle afin de pouvoir nous
          insérer le plus facilement possible dans la vie active. <br />
          <br />
          Ce projet est un moyen pour nous de gagner en expérience et plus
          particulièrement dans l’organisation d’évènements à une échelle
          conséquente.<br />
          <br />
          On espère de tout coeur que l’évènement vous plaira !
        </p>
      </div>
      <!-- lequipe -->
      <div>
        <div
          class="flex py-4 items-center justify-evenly  gap-2"
        >
          <div>
            <h1 class="athena text-3xl text-dark-blue pl-3">L'équipe</h1>
          </div>
          <div>
            <div
              class="border-2 w-32 lg:w-64 bg-dark-blue border-dark-blue"
            ></div>
          </div>
        </div>
        <p class="okiner px-3 text-left">
          Notre équipe se décompose en trois domaines distincts. <br />
          <br />
          Nous retrouvons
          <span class="text-main-beige">Luka Jevremovic</span> ainsi qu’
          <span class="text-main-beige">Ilkay Men</span> pour la partie
          <span class="text-main-beige"> communication</span> de l’évènement.<br />
          <br />
          La partie <span class="text-main-beige"> design </span> de la charte
          graphique du site web revient à Théo
          <span class="text-main-beige"> Pasquarelli</span>
          <span class="text-main-beige"> et Allan Hienne</span>. <br />
          <br />Et pour finir le
          <span class="text-main-beige"> développement</span> du site est géré
          par notre développeur
          <span class="text-main-beige"> Meldryck Saïd</span>.
        </p>
      </div>

      <!-- Z index div absolute et relative nécessaire -->
      <!-- grid grid-rows-n grid-cols-n-->
      <!-- n= nombre de colone et de ligne  -->

      <!-- photo -->
      <div>
        <div class="grid grid-rows-2 md:grid-cols-2 lg:hidden">
          <!-- ALLAN -->
          <div class="flex justify-center">
            <div class="z-0 relative w-2/3">
              <figure class="">
                <img
                  class="rounded-lg my-4 z-0"
                  src="/src/components/equipe/Allan.jpg"
                  alt="Designer Allan"
                />
              </figure>
              <figcaption
                class="okiner text-xl absolute z-10 w-full text-center bottom-5 text-white"
              >
                <div class="okiner text-xl flex flex-col items-center">
                  <p>Allan Hienne</p>
                  <div>
                    <div
                      class="border-2 text-center w-16 bg-white border-white"
                    ></div>
                    <p class="okinel text-xl text-center">Design</p>
                  </div>
                </div>
              </figcaption>
            </div>
          </div>
          <!-- THEO -->
          <div class="flex justify-center">
            <div class="z-0 relative w-2/3">
              <figure class="">
                <img
                  class="rounded-lg my-4 z-0"
                  src="/src/components/equipe/Theo.jpg"
                  alt="Designer Allan"
                />
              </figure>
              <figcaption
                class="okiner text-xl absolute z-10 w-full text-center bottom-5"
              >
                <div
                  class="okiner text-xl flex flex-col text-white items-center"
                >
                  <p>Théo Pasquarelli</p>
                  <div>
                    <div
                      class="border-2 text-center w-16 bg-white border-white"
                    ></div>
                    <p class="okinel text-xl text-center">Design</p>
                  </div>
                </div>
              </figcaption>
            </div>
          </div>

          <!-- IlKAY -->
          <div class="flex justify-center">
            <div class="z-0 relative w-2/3">
              <figure class="">
                <img
                  class="rounded-lg my-4 z-0"
                  src="/src/components/equipe/Ilkay.jpg"
                  alt="Comunicante Ilkay Men"
                />
              </figure>
              <figcaption
                class="okiner text-xl absolute z-10 w-full text-center bottom-5 text-white"
              >
                <div
                  class="okiner text-xl flex flex-col text-white items-center"
                >
                  <p>Ilkay Men</p>
                  <div>
                    <div
                      class="border-2 text-center w-16 bg-white border-white"
                    ></div>
                    <p class="okinel text-xl text-center">Com</p>
                  </div>
                </div>
              </figcaption>
            </div>
          </div>

          <!-- LUKA -->
          <div class="flex justify-center">
            <div class="z-0 relative w-2/3">
              <figure class="">
                <img
                  class="rounded-lg my-4 z-0"
                  src="/src/components/equipe/Luka.jpg"
                  alt="Comunicant Luka Jevremovic"
                />
              </figure>
              <figcaption
                class="okiner text-xl absolute z-10 w-full text-center bottom-5 text-white"
              >
                <div class="okiner text-xl flex flex-col items-center">
                  <p>Luka Jevremovic</p>
                  <div>
                    <div
                      class="border-2 text-center w-16 bg-white border-white"
                    ></div>
                    <p class="okinel text-xl text-center">Com</p>
                  </div>
                </div>
              </figcaption>
            </div>
          </div>
        </div>
        <!-- MELDRYCK -->
        <div class="grid-rows-1 md:grid-cols-1 justify-items-center lg:hidden">
          <div class="flex justify-center">
            <div class="z-0 relative w-fit">
              <figure class="">
                <img
                  class="rounded-lg my-4 z-0"
                  src="/src/components/equipe/Meldryck.jpg"
                  alt="Devellopeur Meldryck SAÏD"
                />
              </figure>
              <figcaption
                class="okiner text-xl absolute z-10 w-full text-center bottom-5 text-white"
              >
                <div class="okiner text-xl flex flex-col items-center">
                  <p>Meldryck SAÏD</p>
                  <div>
                    <div
                      class="border-2 text-center w-16 bg-white border-white"
                    ></div>
                    <p class="okinel text-xl text-center">Dev</p>
                  </div>
                </div>
              </figcaption>
            </div>
          </div>
        </div>
      </div>
      <!-- photo destok -->
      <div>
        <div
          class="hidden lg:grid lg:grid-rows-1 lg:grid-cols-3 lg:px-3 lg:justify-items-center"
        >
          <!-- class="lg:flex lg:flex-wrap lg:justify-between lg:gap-3 sm:hidden md:hidden" -->

          <!-- ALLAN -->
          <div>
            <div class="z-0 relative w-fit">
              <figure class="">
                <img
                  class="rounded-lg my-4 z-0"
                  src="/src/components/equipe/Allan.jpg"
                  alt="Designer Allan"
                />
              </figure>
              <figcaption
                class="okiner text-xl absolute z-10 w-full text-center bottom-5 text-white"
              >
                <div
                  class="okiner text-xl flex flex-col text-center items-center"
                >
                  <p class="">Allan Hienne</p>
                  <div>
                    <div class="border-2 w-16 bg-white border-white"></div>
                    <p class="okinel text-xl text-center">Design</p>
                  </div>
                </div>
              </figcaption>
            </div>
          </div>
          <!-- THEO -->
          <div class=" ">
            <div class="z-0 relative w-fit">
              <figure class="">
                <img
                  class="rounded-lg my-4 z-0"
                  src="/src/components/equipe/Theo.jpg"
                  alt="Designer Allan"
                />
              </figure>
              <figcaption
                class="okiner text-xl absolute z-10 w-full text-center bottom-5"
              >
                <div
                  class="okiner text-xl flex flex-col text-white items-center"
                >
                  <p>Théo Pasquarelli</p>
                  <div>
                    <div
                      class="border-2 text-center w-16 bg-white border-white"
                    ></div>
                    <p class="okinel text-xl text-center">Design</p>
                  </div>
                </div>
              </figcaption>
            </div>
          </div>

          <!-- IlKAY -->
          <div class="flex justify-center">
            <div class="z-0 relative w-fit">
              <figure class="">
                <img
                  class="rounded-lg my-4 z-0"
                  src="/src/components/equipe/Ilkay.jpg"
                  alt="Comunicante Ilkay Men"
                />
              </figure>
              <figcaption
                class="okiner text-xl absolute z-10 w-full text-center bottom-5 text-white"
              >
                <div
                  class="okiner text-xl flex flex-col text-white items-center"
                >
                  <p>Ilkay Men</p>
                  <div>
                    <div
                      class="border-2 text-center w-16 bg-white border-white"
                    ></div>
                    <p class="okinel text-xl text-center">Com</p>
                  </div>
                </div>
              </figcaption>
            </div>
          </div>
        </div>
        <div
          class="hidden lg:grid lg:grid-rows-1 lg:grid-cols-2 lg:justify-items-center"
        >
          <!-- LUKA -->
          <div class="flex justify-center">
            <div class="z-0 relative w-fit">
              <figure class="">
                <img
                  class="rounded-lg my-4 z-0"
                  src="/src/components/equipe/Luka.jpg"
                  alt="Comunicant Luka Jevremovic"
                />
              </figure>
              <figcaption
                class="okiner text-xl absolute z-10 w-full text-center bottom-5 text-white"
              >
                <div class="okiner text-xl flex flex-col items-center">
                  <p>Luka Jevremovic</p>
                  <div>
                    <div
                      class="border-2 text-center w-16 bg-white border-white"
                    ></div>
                    <p class="okinel text-xl text-center">Com</p>
                  </div>
                </div>
              </figcaption>
            </div>
          </div>

          <!-- MELDRYCK -->
          <div class="flex justify-center">
            <div class="z-0 relative w-fit">
              <figure class="">
                <img
                  class="rounded-lg my-4 z-0"
                  src="/src/components/equipe/Meldryck.jpg"
                  alt="Devellopeur Meldryck SAÏD"
                />
              </figure>
              <figcaption
                class="okiner text-xl absolute z-10 w-full text-center bottom-5 text-white"
              >
                <div class="okiner text-xl flex flex-col items-center">
                  <p>Meldryck SAÏD</p>
                  <div>
                    <div
                      class="border-2 text-center w-16 bg-white border-white"
                    ></div>
                    <p class="okinel text-xl text-center">Dev</p>
                  </div>
                </div>
              </figcaption>
            </div>
          </div>
        </div>
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
