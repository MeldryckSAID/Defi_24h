<template>
  <main>
    <div class="flex flex-col justify-center">
      <h2 class="text-center" id="timer2"></h2>
      <div
        class="flex flex-row lg:text-2xl md:text-xl text-sm justify-center gap-2 lg:gap-10"
      >
        <p>Jour</p>
        <p>Heures</p>
        <p>Minutes</p>
        <p>Secondes</p>
      </div>
    </div>
  </main>
</template>
<!-- 11 march .2023 9:30:00 -->
<!-- 11 march .2023 15:00:00 -->
<!-- 11 march .2023 16:30:00 -->
<!-- 11 march .2023 22:30:00 -->
<!-- 12 march .2023 00:01:00 -->
<!-- 12 march .2023 2:00:00 -->
<!-- 12 march .2023 3:30:00 -->
<!-- 12 march .2023 5:00:00 -->
<!-- 12 march .2023 7:00:00 -->
<script>
var deadline = new Date("11 march .2023 16:30:00").getTime();

var now = new Date().getTime;

var x = setInterval(function () {
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("timer2").innerHTML =
    +days + " • " + hours + " • " + minutes + " • " + seconds;
  if (t < 0) {
    clearInterval(x);
    document.getElementById("timer2").innerHTML =
      "Place au défis tous sur la ligne de départ ";
  }
}, 1000);
</script>

<!-- C'est fini !!!! -->
