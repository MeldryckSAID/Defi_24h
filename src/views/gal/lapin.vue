<script setup>
import Back from "@/components/svg/back.vue";
import f from "@/src/components/f.vue";
</script>

<script>
window.onload = function () {
  window.scrollTo(0, 0);
};
</script>

<template>
  <main>
    <RouterLink to="/gal">
      <Back class="ml-6 fixed" />
    </RouterLink>
    <div>
      <div class="flex mb-9 py-4 items-center justify-center">
        <div>
          <h1 class="athena text-3xl mb-3 text-dark-blue pl-3">
            Lapin de Garenne
          </h1>
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
          src="../../assets/webp/LesProjets2.webp"
          alt="Lapin de Garenne"
        />
        <figcaption></figcaption>
      </figure>
    </div>

    <section class="flex justify-center">
      <p class="athena">Membres du groupes :</p>
      <ul class="list-disc athena items-center">
        <br />
        <li>Sacha Wicky</li>
        <li>Paul Tresse</li>
        <li>Lucas Thomesse</li>
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
        Inspiré de la vidéo de Noopy le chien de Michaël Youn, l’équipe Coronel
        Prod (Sacha, Paul et Lucas) a créé un clip de musique avec les paroles
        de ce très cher Michaël sur son fameux chien qui ne comprend rien.
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
      <div class="flex justify-center m-9">
        <iframe
          width="80%"
          height="415"
          src="https://www.youtube-nocookie.com/embed/xpk5LYuDmAk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
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
