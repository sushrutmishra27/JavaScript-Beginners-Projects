let modalContent = document.querySelector(".modal-content");
let openModal = document.querySelector(".open-modal");
let closeModal = document.querySelector(".close-modal");
let blurBg = document.querySelector(".blur-bg");

openModal.addEventListener("click", function () {
          modalContent.classList.remove("hidden-modal");
          blurBg.classList.remove("hidden-blur");
});

closeModal.addEventListener("click", function () {
          modalContent.classList.add("hidden-modal");
          blurBg.classList.add("hidden-blur");
});
