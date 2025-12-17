const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("fa-magnifying-glass", "fa-xmark");
  }
  searchIcon.classList.replace("fa-xmark", "fa-magnifying-glass");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("fa-xmark", "fa-magnifying-glass");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

const showlogin = document.querySelector("#login-popup");
const conatiner = document.querySelector(".login-container");
const loginWrapper = document.querySelector(".login-wrapper");
const closeBtn = document.querySelector(".close-btn");
showlogin.onclick = () => {
  conatiner.classList.add("active");
  loginWrapper.classList.add("active-popup");
};
closeBtn.onclick = () => {
  conatiner.classList.remove("active");
  loginWrapper.classList.remove("active-popup");
};
