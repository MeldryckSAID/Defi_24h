<script setup>
import Back from "/src/components/svg/back.vue";
import f from "/src/components/f.vue";
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
          <h1 class="athena text-3xl mb-3 text-dark-blue pl-3">Sacimder</h1>
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
          src="../../assets/webp/LesProjets5.webp"
          alt="Sacimder"
        />
        <figcaption></figcaption>
      </figure>
    </div>

    <section class="flex justify-center">
      <p class="athena">Membres du groupes :</p>
      <ul class="list-disc athena items-center">
        <br />
        <li>Sébastien Jourdain</li>
        <li>Ambre Geiss</li>
        <li>Mathis Vialle</li>
        <li>Laura Demougeot</li>
        <li>Mathilde Vauquieres</li>
        <li>Pierre Biron</li>
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
        Vous connaissez Vice Versa . Suivez la soutenance de projet Mi-Figue
        Mi-Raisin de Sébastien et ses émotions Colère (Ambre), Joie (Laura),
        Stress (Pierre) et Sarcasme (Mathis) devant trois professeurs pas
        emballés son projet. Rester jusqu’à la fin un bêtisier vous attend.
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
          src="https://www.youtube-nocookie.com/embed/CDaTXkFvW_k"
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
