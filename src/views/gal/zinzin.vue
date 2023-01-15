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
            Les Zinzins de l’espace
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
          src="../../assets/webp/LesProjets4.webp"
          alt="Les Zinzins de l’espace"
        />
        <figcaption></figcaption>
      </figure>
    </div>

    <section class="flex justify-center">
      <p class="athena">Membres du groupes :</p>
      <ul class="list-disc athena items-center">
        <br />
        <li>Meldryck Saïd</li>
        <li>Laura Védrine</li>
        <li>Morgane Chamberlin</li>
        <li>Héléna Jaegle</li>
        <li>Agathe ECCHER</li>
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
        Découvrez les affiches dans le thème Mi-Figue Mi-Raisin faite par
        l’équipe des zinzin de l’espace composait de Meldryck, Laura, Morgane,
        Héléna et Agathe.
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
      <div class="grid gap-6 grid-cols-5 mx-5">
        <figure>
          <img src="../../assets/webp/z/agathe-1.webp" alt="" />
          <figcaption></figcaption>
        </figure>
        <figure>
          <img src="../../assets/webp/z/Helena-1_1.webp" alt="" />
          <figcaption></figcaption>
        </figure>
        <figure>
          <img src="../../assets/webp/z/Laura-1_1.webp" alt="" />
          <figcaption></figcaption>
        </figure>
        <figure>
          <img src="../../assets/webp/z/Meldryck-1.webp" alt="" />
          <figcaption></figcaption>
        </figure>
        <figure>
          <img src="../../assets/webp/z/Morgane-1.webp" alt="" />
          <figcaption></figcaption>
        </figure>
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
