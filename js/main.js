const link = document.querySelector(".search__button");
const popup = document.querySelector(".modal");
const form = document.querySelector("form");
const checkindate = document.querySelector("[name=check-in-date]");
const checkoutdate = document.querySelector("[name=check-out-date]");
const adult = document.querySelector("[name=adult]");
const openpopup = document.querySelector (".search__form");

popup.classList.add("modal-close");
link.addEventListener("click", function(evt) {
  popup.classList.add("modal-show");
});
openpopup.classList.add("open-popup");
form.addEventListener("submit", function(evt) {
  if (!checkindate.value || !checkoutdate.value || !adult.value) {
    evt.preventDefault();
    openpopup.classList.add("popup-error");
  }
});
