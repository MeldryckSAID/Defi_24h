<script setup>
import timerr from "/src/components/timerr.vue";
import F from "/src/components/f.vue";
import boutonwhite from "../components/bouton/boutonwhite.vue";
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
        <!-- titre -->
        <div class="ml-6">
          <div class="flex mb-9 py-4 items-center">
            <div>
              <h1
                class="athena text-xl md:text-3xl lg:text-5xl text-dark-blue pl-3"
              >
                L'évenement
              </h1>

              <div>
                <div class="border-2 w-3/4 bg-dark-blue border-dark-blue"></div>
              </div>
            </div>
          </div>
        </div>
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
                      >Inscription</boutonwhite
                    >
                  </div>
                </router-link>
              </div>
            </figcaption>
          </div>
        </div>
        <!-- div bg -->
        <!-- <div class="bg-amphib w-fit">
          <h2 class="m-6 text-2xl text-left okiner text-white">
            24 heures de festival
            <br />
            créatif
          </h2>
          <div>
            <div
              class="border-2 my-3 text-center w-2/3 bg-white border-white"
            ></div>
          </div>
          <p class="text-xl m-6 text-left okinel text-white">
            Venez en équipe pour créer le meilleur <br />
            projet durant 24 heures de défis <br />
            et d’animations
          </p>
          <div class="flex justify-end m-6">
            <boutonwhite>test</boutonwhite>
          </div>
        </div> -->
      </div>

      <!-- defi -->
      <div class="ml-6">
        <div class="flex mb-9 py-2 items-center">
          <div>
            <h1
              class="athena text-xl md:text-3xl lg:text-5xl text-dark-blue pl-3"
            >
              Le Défi
            </h1>

            <div>
              <div class="border-2 w-3/4 bg-dark-blue border-dark-blue"></div>
            </div>
          </div>
        </div>
        <p class="okiner pb-2 text-left text-lg md:text-2xl">
          Cet évênement phare du cursus MMI revient une nouvelle fois, et cette
          fois-ci. <br />
          Nous faisons les choses en grand !
        </p>
        <p class="okiner py-2 text-left text-lg md:text-2xl">
          Le Défi 24H est une façon de mettre vos compétences acquises lors de
          votre année en oeuvre, mais pour une fois, seulement pour s’amuser !
        </p>
        <p class="okiner py-2 text-left text-lg md:text-2xl">
          Alors n’hésitez plus et venez prouver que vous êtes le ou la
          meilleur(e) !
        </p>
      </div>
      <figure>
        <img src="src/components/jpg/babyf.png" alt="évenement passé" />
        <figcaption class="okinel italic">
          exemple de ce que vous pourriez faire
        </figcaption>
      </figure>
      <!-- animations -->
      <div class="ml-6">
        <div class="flex mb-9 py-4">
          <div>
            <h1
              class="athena text-xl md:text-3xl lg:text-5xl text-dark-blue pl-3"
            >
              Les animations
            </h1>

            <div>
              <div class="border-2 w-3/4 bg-dark-blue border-dark-blue"></div>
            </div>
          </div>
        </div>
        <p class="okiner py-2 text-left text-lg md:text-2xl">
          Cette année est très particulière, nous fêtons les 25 ans de MMI, et
          pour cela nous vous avons préparé une édition spéciale du Défi 24H !
        </p>
        <p class="okiner py-2 text-left text-lg md:text-2xl">
          Pour cette fois les anciens sont également invités à venir participer
          au Défi, ou à tout simplement venir rencontrer les étudiants et revoir
          les anciens professeurs !
        </p>
      </div>

      <!-- animations -->
      <div class="ml-6">
        <div class="flex mb-9 py-4">
          <div>
            <h1
              class="athena text-xl md:text-3xl lg:text-5xl text-dark-blue pl-3"
            >
              Programme
            </h1>

            <div>
              <div class="border-2 w-3/4 bg-dark-blue border-dark-blue"></div>
            </div>
          </div>
        </div>
        <p class="okiner py-2 text-left text-lg md:text-2xl">
          L’activité principale reste, sans surprise, le Défi 24H ! Vous devrez
          réaliser un projet en raccord avec le milieu du numérique et le thème
          que l’on aura choisis par nos soins ! La petite particularité sera
          qu’il faudra réaliser ce projet en seulement 12H !
        </p>
        <p class="okiner py-2 text-left text-lg md:text-2xl">
          Si nous vous laissons seulement la moité du temps impartis ce n’est
          pas pour vous pénaliser, mais parce qu’une soirée est prévue durant la
          nuit du Samedi au Dimanche !
        </p>
        <p class="okiner py-2 text-left text-lg md:text-2xl">
          Et enfin pour finir, le Dimanche sera consacré à la l’annonce des
          résultats du Défi 24H, mais également du concours digitale 25 ans
          organisé par nos collègues
        </p>
      </div>
      <!-- partenaires -->

      <div class="ml-6">
        <div class="flex mb-9 py-4 ">
          <div>
            <h1
              class="athena text-xl md:text-3xl lg:text-5xl text-dark-blue pl-3"
            >
              Nos partenaires
            </h1>

            <div>
              <div class="border-2 w-3/4 bg-dark-blue border-dark-blue"></div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 grid-rows-7">
          <figure class="col-start-1 row-start-1">
            <img src="../components/partenaire/mmi.png" alt="mmi" />
            <figcaption></figcaption>
          </figure>
          <figure class="col-start-2 row-start-2">
            <img src="../components/partenaire/bde.png" alt="bde" />
            <figcaption></figcaption>
          </figure>
          <figure class="col-start-1 row-start-3">
            <img src="../components/partenaire/crous.png" alt="Crous" />
            <figcaption></figcaption>
          </figure>

          <figure class="col-start-2 row-start-4">
            <img src="../components/partenaire/PMA.jpg" alt="Pma" />
            <figcaption></figcaption>
          </figure>
          <figure class="col-start-1 row-start-5">
            <img src="../components/partenaire/memo.png" alt="memo" />
            <figcaption></figcaption>
          </figure>
          <figure class="col-start-2 row-start-6">
            <img src="../components/partenaire/chiken.png" alt="Pma" />
            <figcaption></figcaption>
          </figure>
          <figure class="col-start-1 row-start-7">
            <img src="../components/partenaire/mmi25_logo 1.png" alt="Pma" />
            <figcaption></figcaption>
          </figure>
        </div>
        <div class="grid grid-cols-2 mb-4 grid-rows-7">
          <figure class="col-start-2 row-start-1">
            <img src="../components/partenaire/universite.jpg" alt="Pma" />
            <figcaption></figcaption>
          </figure>
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
