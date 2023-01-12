const point1 = document.getElementById("point1");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");

//console.log(inc)
inc.onclick = () => {
  point1.innerText = parseInt(point1.innerText) + 50;
};
