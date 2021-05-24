const navToggle = document.querySelector(".page-header__toggle");
const navMain = document.querySelector(".main-menu");
navMain.classList.add("main-menu--closed");

navToggle.addEventListener("click", function() {
  navToggle.classList.toggle("page-header__toggle--closed");
  navMain.classList.toggle("main-menu--opened");
});
