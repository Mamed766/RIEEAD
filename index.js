// Hamburger menüyü açma ve kapatma işlevselliği ekleyin
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbarContent = document.querySelector(".navbar__content");

hamburgerMenu.addEventListener("click", function () {
  navbarContent.classList.toggle("active");

  if (navbarContent.classList.contains("active")) {
    setTimeout(function () {
      navbarContent.style.opacity = "1";
    }, 10);
  } else {
    navbarContent.style.opacity = "0";
  }
});
