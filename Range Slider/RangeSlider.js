let input = document.querySelector(".input");
let result = document.querySelector(".result");
let output = document.querySelector(".output");

input.addEventListener("input", function () {
          result.innerText = input.value + "%";
          output.style.borderRadius = input.value + "%";
});
