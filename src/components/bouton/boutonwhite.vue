<template>
  <button
    class="p-1 w-1/2 okinel lg:w-fit text-lg md: border-2 rounded-lg text-black bg-white border-white hover:text-main-beige"
    type="submit"
  >
    <slot />
  </button>
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
