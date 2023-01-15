<script setup>
import f from "/src/components/f.vue";
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
          <h1 class="athena text-3xl mb-3 text-dark-blue pl-3">L'Arnaque</h1>
          <div>
            <div class="border-2 w-3/4 bg-dark-blue border-dark-blue"></div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <figure class="my-14 flex justify-center">
        <img
          class="w-fit"
          src="../../assets/webp/LesProjets6.webp"
          alt="L'arnaque"
        />
        <figcaption></figcaption>
      </figure>
    </div>

    <section class="flex justify-center">
      <p class="athena">Membres du groupes :</p>
      <ul class="list-disc athena items-center">
        <br />
        <li>Ilkay Men</li>
        <li>Allan Hienne</li>
        <li>Valentin Saraiva</li>
        <li>Eliot Feuvrier</li>
        <li>Evan Raboutot</li>
        <li>Maxime Golfier</li>
        <li>Julien Fleurent</li>
      </ul>
    </section>

    <section>
      <div>
        <div class="flex mb-9 py-4 items-center justify-center">
          <div>
            <h2 class="athena text-3xl mb-3 text-dark-blue pl-3">
              Description du projet
            </h2>
            <div>
              <div class="border-2 w-3/4 bg-dark-blue border-dark-blue"></div>
            </div>
          </div>
        </div>
      </div>

      <p class="p-4 okiner">
        Saurez vous comment est morte Amélie Marchale ? Meurtre, suicide ou
        évènement anormal à vous de découvrir les mystères de cette affaire
        grâce au téléphone portable de la victime retrouvée proche son cadavre.
      </p>
    </section>

    <section>
      <div>
        <div class="flex mb-9 py-4 items-center justify-center">
          <div>
            <h2 class="athena text-3xl mb-3 text-dark-blue pl-3">Le Projet</h2>
            <div>
              <div class="border-2 w-3/4 bg-dark-blue border-dark-blue"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center my-3">
        <div class="border-2 bg-dark-blue text-center w-fit p-2">
          <a
            class="text-main-beige"
            href="https://www.figma.com/proto/tw96yaw0yLKGBFT87LTJMz/T%C3%A9l%C3%A9phone-victime?node-id=1%3A3&scaling=scale-down&page-id=1%3A2&starting-point-node-id=1%3A3"
            >Aurez vous le courage de défie l'anormal
          </a>
        </div>
      </div>
    </section>
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
