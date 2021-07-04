const link = document.querySelector(".search__button");
const popup = document.querySelector(".modal");
const form = document.querySelector("form");

link.addEventListener("click", function(evt) {
  popup.classList.add("modal-show");
});
form.addEventListener("submit", function(evt) {
  evt.preventDefault();
})
