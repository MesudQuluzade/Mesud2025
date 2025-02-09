const menuToggle = document.getElementById("menu-toggle");
const closeIcon = document.getElementById("close-icon");
const mobileMenuContent = document.getElementById("mobile-menu-content");
const mobileMenu = document.getElementById("mobile-menu");
const dropdownButton = document.querySelector(".dropdown-menu");
const megaMenu = document.querySelector(".mega-menu");

menuToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    menuToggle.classList.add("hidden");
    closeIcon.classList.remove("hidden");
    mobileMenuContent.classList.remove("hidden");
});

closeIcon.addEventListener("click", (event) => {
    event.stopPropagation();
    menuToggle.classList.remove("hidden");
    closeIcon.classList.add("hidden");
    mobileMenuContent.classList.add("hidden");
});

document.addEventListener("click", (event) => {
    if (!mobileMenu.contains(event.target) && !mobileMenuContent.contains(event.target)) {
        menuToggle.classList.remove("hidden");
        closeIcon.classList.add("hidden");
        mobileMenuContent.classList.add("hidden");
    }
});

dropdownButton.addEventListener("click", (event) => {
    event.stopPropagation();
    megaMenu.classList.toggle("active");
});

document.addEventListener("click", (event) => {
    if (!dropdownButton.contains(event.target) && !megaMenu.contains(event.target)) {
        megaMenu.classList.remove("active");
    }
});



$(document).ready(function () {
  $(".slick-slider").slick({
    infinite: true,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});
