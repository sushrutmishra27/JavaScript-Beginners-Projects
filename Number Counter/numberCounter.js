const result = document.querySelector(".result");
const dec = document.querySelector(".dec");
const reset = document.querySelector(".reset");
const inc = document.querySelector(".inc");

dec.addEventListener("click", function() {
  result.innerHTML--
})
reset.addEventListener("click", function() {
  result.innerHTML = 0
})
inc.addEventListener("click", function() {
  result.innerHTML++
})
