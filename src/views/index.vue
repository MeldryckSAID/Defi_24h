<script setup>
import timerr from "/src/components/timerr.vue";
import timerdefis from "/src/components/timerdefis.vue";
import F from "/src/components/f.vue";
import boutonwhite from "/src/components/bouton/boutonwhite.vue";
</script>

<script>
window.onload = function () {
  window.scrollTo(0, 0);
};
</script>

<template>
  <main class="min-h-screen">
    <!-- Il vous reste. Bonne Chance   -->
    <h1 class="lg:text-7xl md:text-4xl text-2xl text-center athena">
     C'est fini 
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
                </div>
              </figcaption>
            </div>
          </div>
          <p class="m-2 okiner pb-2 text-left text-lg md:text-2xl">
            Cet évènement phare du cursus MMI revient une nouvelle fois, et
            cette fois-ci, nous faisons les choses en grand ! <br /><br />
            Le défi 24H est une façon de mettre vos compétences acquises lors de
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
                  src="../components/index/time.webp"
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
                  src="../components/index/groupe.webp"
                  alt="MMI defie de l'an passer"
                />
                <figcaption>MMI defie de l'an passer</figcaption>
              </figure>
              <p class="okiner pb-2 text-left text-lg md:text-2xl">
                Cette année est une édition spéciale, pour les 25 ans de MMI;
                les anciens étudiants et professeurs sont tout autant invités et
                nous avons hâte de vous revoir au département !
              </p>
            </div>

            <div class="flex flex-col">
              <figure>
                <img
                  class="w-4/5"
                  src="../components/index/25ans.webp"
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

        <div class="ml-6">
          <div class="flex mb-9 py-4 items-center">
            <div>
              <h2
                class="athena text-xl md:text-3xl lg:text-5xl text-dark-blue pl-3"
              >
                Les défis
              </h2>

              <div>
                <div class="border-2 w-3/4 bg-dark-blue border-dark-blue"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full">
          <div class="flex flex-col justify-center">
            <h4 class="athena text-center lg:text-4xl md:text-3xl h-32 text-xl">
              Début du prochain défis dans
            </h4>
            <timerdefis class="athena lg:text-7xl md:text-4xl h-32 text-xl" />
          </div>
        </div>
        <div class="flex justify-center w-full">
          <div
            class="m-3 grid gap-2 md:grid-rows-4 md:grid-cols-3 lg:grid-rows-1 lg:grid-cols-3"
          >
            <div class="flex flex-col row-start-1 col-start-1">
              <figure>
                <img
                  class="w-4/5"
                  src="../components/index/def/creation.webp"
                  alt="défi"
                />
                <figcaption></figcaption>
              </figure>
              <p class="okiner pb-2 text-left text-lg md:text-xl">
                Que la force soit avec vous
              </p>
              <p class="okiner pb-2 text-left text-lg md:text-xl">
                Pour ce premier défi, vous avez 30min afin de créer votre plus
                belle affiche d'équipe. <br />
                Attention, celle-ci vous représentera jusqu'à la fin de
                l'évènement ! <br />
                Vous devrez y représenter le nom de votre équipe, le nom de
                chacun de vous, ainsi que quelque chose désignant chacun d'entre
                vous
              </p>
            </div>

            <div class="flex flex-col row-start-1 col-start-2">
              <figure>
                <img
                  class="w-4/5"
                  src="../components/index/def/1/jj.png"
                  alt="pas vue pas pris"
                />
                <figcaption></figcaption>
              </figure>
              <p class="okiner pb-2 text-left text-lg md:text-xl">
                Ce n'est pas la réalité qui compte dans un film, <br />
                mais ce que l'imagination peut en faire
              </p>
              <p class="okiner pb-2 text-left text-lg md:text-xl">
                Les scènes culte vous connaissez ? <br />
                Lors de ce défi vous allez devoir <br />
                reproduire une scène culte de film/série/dessin animée <br />
                avec un ancien MMI!!! vous avez 1h
              </p>
            </div>

            <div class="flex flex-col row-start-1 col-start-3">
              <figure>
                <img
                  class="w-4/5"
                  src="../components/index/def/1/cowboy.png"
                  alt="chance"
                />
                <figcaption></figcaption>
              </figure>
              <p class="okiner pb-2 text-left text-lg md:text-xl">
                " Dieu n'est pas avec nous <br />
                et il déteste les corniauds <br />
                de ton genre ..."
              </p>
              <p class="okiner pb-2 text-left text-lg md:text-xl">
                Nous vous défions lors d'un duel digne des plus grands western !
                Malheureusement pour vous, il sera difficile de gagner des
                points dans ce défi... <br />
              </p>
            </div>

            <div class="flex flex-col row-start-2 col-start-1">
              <figure>
                <img
                  class="w-4/5"
                  src="../components/index/def/1/Korg.png"
                  alt="pas vue pas pris"
                />
                <figcaption></figcaption>
              </figure>
              <p class="okiner pb-2 text-left text-lg md:text-xl">
                "Pierre" ... <br />
                Présent
              </p>
            </div>

            <div class="flex flex-col row-start-2 col-start-2">
              <figure>
                <img
                  class="w-4/5"
                  src="../components/index/def/1/la mouche.png"
                  alt="chance"
                />
                <figcaption></figcaption>
              </figure>
              <p class="okiner pb-2 text-left text-lg md:text-xl">
                Tu as entendu Hagrid : <br />
                « suivez les araignées ! »
              </p>
            </div>

            <div class="flex flex-col row-start-2 col-start-3">
              <figure>
                <img
                  class="w-4/5"
                  src="../components/index/def/1/pirate.png"
                  alt="pas vue pas pris"
                />
                <figcaption></figcaption>
              </figure>
              <p class="okiner pb-2 text-left text-lg md:text-xl">
                Mais où allons-nous <br />
                Oh Oh tiens voilà quelqu'un
              </p>
            </div>

            <div class="flex flex-col row-start-3 col-start-1">
              <figure>
                <img
                  class="w-4/5"
                  src="../components/index/def/1/effel.png"
                  alt="chance"
                />
                <figcaption></figcaption>
              </figure>
              <p class="okiner pb-2 text-left text-lg md:text-xl">
                “Parfaitement équilibré. Comme tout devrait l'être.”
              </p>
            </div>

            <div class="flex flex-col row-start-3 col-start-2">
              <figure>
                <img
                  class="w-4/5"
                  src="../components/index/def/1/shrek.png"
                  alt="chance"
                />
                <figcaption></figcaption>
              </figure>
              <p class="okiner pb-2 text-left text-lg md:text-xl">Euh..</p>
            </div>
            <div class="flex flex-col row-start-3 col-start-3">
              <figure>
                <img
                  class="w-4/5"
                  src="../components/index/def/1/scooby.png"
                  alt="pas vue pas pris"
                />
                <figcaption></figcaption>
              </figure>
              <p class="okiner pb-2 text-left text-lg md:text-xl">
                Nous on te suis partout <br />
                On va résoudre ce mystère.
              </p>
            </div>

            <div class="flex flex-col row-start-4 col-start-1">
              <figure>
                <img
                  class="w-4/5"
                  src="../components/index/def/1/pompe.png"
                  alt="chance"
                />
                <figcaption></figcaption>
              </figure>
              <p class="okiner pb-2 text-left text-lg md:text-xl">
                Ah euh oui bonne chance
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-full text-center items-center gap-4">
          <h4 class="okiner">
            C'est ici que vous nous déposerez vos travaux <br />
          </h4>
          <button
            class="bg-main-blue w-fit okineb text-main-beige mx-3 py-2 px-8 rounded-lg"
            href="https://drive.google.com/drive/folders/1iys11ETVBXvscmD7hVA-gKn43_rcA-vp"
          >
            ici
          </button>
        </div>

        <!-- défi -->
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
                  src="../components/index/dance.webp"
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
              et le thème que l’on aura choisi par nos soins ! La petite
              particularité sera qu’il faudra réaliser ce projet en seulement
              12H !
            </p>
            <p class="okiner py-2 text-left text-lg md:text-2xl">
              Si nous vous laissons seulement la moitié du temps impartit ce
              n’est pas pour vous pénaliser, mais parce qu’une soirée est prévue
              durant la nuit du Samedi au Dimanche !
            </p>
            <p class="okiner py-2 text-left text-lg md:text-2xl">
              Et enfin pour finir, le Dimanche sera consacré à l’annonce des
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
                  src="../components/partenaire/mmi.png"
                  alt="mmi"
                />
                <figcaption></figcaption>
              </figure>
              <figure
                class="col-start-2 row-start-2 md:col-start-2 md:row-start-1 lg:row-start-1 lg:col-start-3"
              >
                <img
                  class="w-2/3"
                  src="../components/index/N-con-Logo-quadri.webp"
                  alt="bde"
                />
                <figcaption></figcaption>
              </figure>
              <figure
                class="col-start-1 row-start-3 md:col-start-4 md:row-start-1 lg:row-start-1 lg:col-start-4"
              >
                <img
                  class="w-2/3"
                  src="../components/partenaire/crous.png"
                  alt="Crous"
                />
                <figcaption></figcaption>
              </figure>

              <figure
                class="col-start-2 row-start-4 md:col-start-3 md:row-start-1 lg:row-start-2 lg:col-start-1"
              >
                <img
                  class=""
                  src="../components/partenaire/PMA.jpg"
                  alt="Pma"
                />
                <figcaption></figcaption>
              </figure>
              <figure
                class="col-start-1 row-start-5 md:col-start-1 md:row-start-2 lg:row-start-2 lg:col-start-2"
              >
                <img
                  class=""
                  src="../components/partenaire/memo.png"
                  alt="memo"
                />
                <figcaption></figcaption>
              </figure>
              <figure
                class="col-start-2 row-start-6 md:col-start-3 md:row-start-2 lg:row-start-2 lg:col-start-3"
              >
                <img
                  class="w-1/3"
                  src="../components/index/master.webp"
                  alt="Master chiken"
                />
                <figcaption></figcaption>
              </figure>
              <figure
                class="col-start-1 row-start-7 md:col-start-2 md:row-start-2 lg:row-start-2 lg:col-start-4"
              >
                <img
                  class="w-1/2"
                  src="../assets/svg/25mmi.svg"
                  alt="25 ans MMI"
                />
                <figcaption></figcaption>
              </figure>
              <figure
                class="col-start-2 row-start-1 md:col-start-4 md:row-start-2 lg:row-start-2 lg:col-start-5"
              >
                <img
                  class=""
                  src="../components/partenaire/universite.jpg"
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
.okineb {
  font-family: "made_okine_sans_personal_usBd";
}
</style>
