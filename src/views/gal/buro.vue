<script setup>
import f from "/src/components/f.vue";
</script>

<template>
  <main>
    <div>
      <div class="flex mb-9 py-4 items-center justify-center">
        <div>
          <h1 class="athena text-3xl mb-3 text-dark-blue pl-3">
            Gaillard LeBuro
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
          src="../../assets/webp/LesProjets3.webp"
          alt="LeBurau"
        />
        <figcaption></figcaption>
      </figure>
    </div>

    <section class="flex justify-center">
      <p class="athena">Membres du groupes :</p>
      <ul class="list-disc athena items-center">
        <br />
        <li>Elias Mach-Houty</li>
        <li>Andreas Lopez</li>
        <li>Loris Saturni</li>
        <li>Loup Lobato</li>
        <li>Titouan Joury</li>
        <li>Matthieu Hoarreau</li>
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
        Inspiré de l’humour et du malaise de la série américaine The Office, Le
        Bureau retrace les péripétie des 6 membres du groupe lors du défi 24h de
        2022… Introduction, construction et garnde intrigue seront au
        rendez-vous lors de cet épisode parodique rendant hommage au septième
        art. Inclus avec l’épisode, la bande originale de ce dernier, un remix
        de la bande originale de The Office.
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
          src="https://www.youtube.com/embed/oCGaZXdkkNI"
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
