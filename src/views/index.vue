<script setup>
import timerr from "/src/components/timerr.vue";
import F from "/src/components/f.vue";
import boutonwhite from " /components/bouton/boutonwhite.vue";
</script>

<script>
window.onload = function () {
  window.scrollTo(0, 0);
};
</script>

<template>
  <main class="min-h-screen">
    <h1 class="lg:text-7xl md:text-4xl text-2xl text-center athena">
      Début du festival dans
    </h1>
    <timerr class="athena lg:text-7xl md:text-4xl h-32 text-xl"></timerr>

    <!-- version mobile  -->
    <div class="">
      <div class="flex flex-col items-start">
        <div>
          <!-- titre -->

          <!-- zindex -->
          <div class="flex justify-center">
            <div class="z-0 relative w-full">
              <figure class="">
                <img
                  class="my-4 z-0"
                  src="/src/components/jpg/amphib.png"
                  alt="amphi"
                />
              </figure>
              <figcaption
                class="okiner text-xl absolute z-10 w-full bottom-5 text-white"
              >
                <div class="m-2 md:m-4 lg:m-8">
                  <div class="w-fit">
                    <h2
                      class="text-xl md:text-3xl lg:text-5xl text-left okiner text-white"
                    >
                      24 heures de festival créatif
                    </h2>
                    <div>
                      <div class="border-2 w-2/3 bg-white border-white"></div>
                    </div>
                  </div>
                  <p class="text-xl lg:text-3xl text-left okinel text-white">
                    Venez en équipe pour créer le meilleur <br />
                    projet durant 24 heures de défis <br />
                    et d’animations
                  </p>
                  <router-link to="/account"
                    ><div class="flex justify-end m-3">
                      <boutonwhite class="lg:text-3xl md:text-2xl"
                        >Inscription
                      </boutonwhite>
                    </div>
                  </router-link>
                </div>
              </figcaption>
            </div>
          </div>
          <p class="m-2 okiner pb-2 text-left text-lg md:text-2xl">
            Cet évènement phare du cursus MMI revient une nouvelle fois, et
            cette fois-ci, nous faisons les choses en grand ! <br /><br />
            Le Défi 24H est une façon de mettre vos compétences acquises lors de
            votre année en œuvre, mais pour une fois, seulement pour s’amuser !
            <br /><br />
            Alors n’hésitez plus et venez prouver que vous êtes le ou la
            meilleur(e) !
          </p>
          <!-- zindex -->

          <!-- évenement -->

          <div class="ml-6">
            <div class="flex mb-9 py-4 items-center">
              <div>
                <h2
                  class="athena text-xl md:text-3xl lg:text-5xl text-dark-blue pl-3"
                >
                  L'évenement
                </h2>

                <div>
                  <div
                    class="border-2 w-3/4 bg-dark-blue border-dark-blue"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="m-3 grid gap-2 md:grid-rows-1 md:grid-cols-3 lg:grid-rows-1 lg:grid-cols-3"
          >
            <div class="flex flex-col">
              <figure>
                <img
                  class="w-4/5"
                  src=" /components/index/time.webp"
                  alt="rappel"
                />
                <figcaption>Petit rappel</figcaption>
              </figure>
              <p class="okiner pb-2 text-left text-lg md:text-2xl">
                Comme chaque année, le défi 24h reviens pour une nouvelle
                édition dont le thème précis restera secret jusqu’à la fin du
                compte à rebours !
              </p>
            </div>

            <div class="flex flex-col">
              <figure>
                <img
                  class="w-4/5"
                  src=" /components/index/groupe.webp"
                  alt="MMI defie de l'an passer"
                />
                <figcaption>MMI defie de l'an passer</figcaption>
              </figure>
              <p class="okiner pb-2 text-left text-lg md:text-2xl">
                Cette année est une édition spéciale, pour les 25 ans de MMI,
                les anciens étudiants et professeurs sont tout autant invités et
                nous avons hâte de vous revoir au département !
              </p>
            </div>

            <div class="flex flex-col">
              <figure>
                <img
                  class="w-4/5"
                  src=" /components/index/25ans.webp"
                  alt="collaboration"
                />
                <figcaption>Les 25 ans du département</figcaption>
              </figure>
              <p class="okiner pb-2 text-left text-lg md:text-2xl">
                Cet évènement est en collaboration avec celui des 25 ans de MMI.
                Pour l’occasion, nous vous proposons une soirée regroupant
                amusement, retrouvaille et animation !
              </p>
            </div>
          </div>
        </div>

        <!-- évenement -->

        <div
          class="m-3 grid gap-2 md:grid-rows-1 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-2"
        >
          <!-- animations -->

          <div class="ml-6">
            <div class="flex mb-9 py-4">
              <div>
                <h2
                  class="athena text-xl md:text-3xl lg:text-5xl text-dark-blue pl-3"
                >
                  Les animations
                </h2>

                <div>
                  <div
                    class="border-2 w-3/4 bg-dark-blue border-dark-blue"
                  ></div>
                </div>
              </div>
            </div>
            <div class="">
              <figure>
                <img
                  class="w-4/5"
                  src=" /components/index/dance.webp"
                  alt="Ambiance"
                />
                <figcaption></figcaption>
              </figure>
              <p class="okiner py-2 text-left text-lg md:text-2xl">
                Un bon nombre d’animations sont prévues pour vous faire passer
                un moment inoubliable en notre compagnie ! Projets, défis,
                contraintes, soirées et autres animations sont au rendez-vous,
                alors pas la peine d’hésiter, il faut venir !
              </p>
            </div>
          </div>
          <!-- animations -->

          <!-- programme -->
          <div class="ml-6">
            <div class="flex mb-9 py-4">
              <div>
                <h2
                  class="athena text-xl md:text-3xl lg:text-5xl text-dark-blue pl-3"
                >
                  Programme
                </h2>

                <div>
                  <div
                    class="border-2 w-3/4 bg-dark-blue border-dark-blue"
                  ></div>
                </div>
              </div>
            </div>
            <p class="okiner py-2 text-left text-lg md:text-2xl">
              L’activité principale reste, sans surprise, le Défi 24H ! Vous
              devrez réaliser un projet en raccord avec le milieu du numérique
              et le thème que l’on aura choisis par nos soins ! La petite
              particularité sera qu’il faudra réaliser ce projet en seulement
              12H !
            </p>
            <p class="okiner py-2 text-left text-lg md:text-2xl">
              Si nous vous laissons seulement la moité du temps impartis ce
              n’est pas pour vous pénaliser, mais parce qu’une soirée est prévue
              durant la nuit du Samedi au Dimanche !
            </p>
            <p class="okiner py-2 text-left text-lg md:text-2xl">
              Et enfin pour finir, le Dimanche sera consacré à la l’annonce des
              résultats du Défi 24H, mais également du concours digitale 25 ans
              organisé par nos collègues
            </p>
          </div>
          <!-- programme -->
        </div>
        <!-- partenaires -->

        <div class="ml-6">
          <div class="flex mb-9 py-4">
            <div>
              <h2
                class="athena text-xl md:text-3xl lg:text-5xl text-dark-blue pl-3"
              >
                Nos partenaires
              </h2>

              <div>
                <div class="border-2 w-3/4 bg-dark-blue border-dark-blue"></div>
              </div>
            </div>
          </div>

          <div class="gap-3">
            <div
              class="grid items-center grid-cols-2 grid-rows-7 md:grid-cols-4 md:grid-rows-2 lg:grid-cols-5 lg:grid-rows-2"
            >
              <figure
                class="col-start-1 row-start-1 md:col-start-1 md:row-start-1 lg:row-start-1 lg:col-start-2"
              >
                <img
                  class=""
                  src=" /components/partenaire/mmi.png"
                  alt="mmi"
                />
                <figcaption></figcaption>
              </figure>
              <figure
                class="col-start-2 row-start-2 md:col-start-2 md:row-start-1 lg:row-start-1 lg:col-start-3"
              >
                <img
                  class="w-2/3"
                  src=" /components/index/N-con-Logo-quadri.webp"
                  alt="bde"
                />
                <figcaption></figcaption>
              </figure>
              <figure
                class="col-start-1 row-start-3 md:col-start-4 md:row-start-1 lg:row-start-1 lg:col-start-4"
              >
                <img
                  class="w-2/3"
                  src=" /components/partenaire/crous.png"
                  alt="Crous"
                />
                <figcaption></figcaption>
              </figure>

              <figure
                class="col-start-2 row-start-4 md:col-start-3 md:row-start-1 lg:row-start-2 lg:col-start-1"
              >
                <img
                  class=""
                  src=" /components/partenaire/PMA.jpg"
                  alt="Pma"
                />
                <figcaption></figcaption>
              </figure>
              <figure
                class="col-start-1 row-start-5 md:col-start-1 md:row-start-2 lg:row-start-2 lg:col-start-2"
              >
                <img
                  class=""
                  src=" /components/partenaire/memo.png"
                  alt="memo"
                />
                <figcaption></figcaption>
              </figure>
              <figure
                class="col-start-2 row-start-6 md:col-start-3 md:row-start-2 lg:row-start-2 lg:col-start-3"
              >
                <img
                  class=""
                  src=" /components/index/master.webp"
                  alt="Master chiken"
                />
                <figcaption></figcaption>
              </figure>
              <figure
                class="col-start-1 row-start-7 md:col-start-2 md:row-start-2 lg:row-start-2 lg:col-start-4"
              >
                <img
                  class="w-1/2"
                  src=" /assets/svg/25mmi.svg"
                  alt="25 ans MMI"
                />
                <figcaption></figcaption>
              </figure>
              <figure
                class="col-start-2 row-start-1 md:col-start-4 md:row-start-2 lg:row-start-2 lg:col-start-5"
              >
                <img
                  class=""
                  src=" /components/partenaire/universite.jpg"
                  alt="Universiter"
                />
                <figcaption></figcaption>
              </figure>
            </div>
          </div>
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
