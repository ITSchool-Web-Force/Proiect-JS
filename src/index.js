const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active")
}));

ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2500,
  delay: 400
});

ScrollReveal().reveal('.goals , .stronger', {delay: 300, origin: 'left'});
ScrollReveal().reveal('.protein-powder', {delay: 300, origin: 'right'});
ScrollReveal().reveal('.swiper-wrapper', {delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.gym-info , .trainers , .health-clubs', {delay: 100, origin: 'left'});
ScrollReveal().reveal('.gym-png , .one-png , .hard-png', {delay: 100, origin: 'right'})

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    400: {
      slidesPerView: 3,
      spaceBetween: 13,
    },
    600: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    800: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});

const cursor = document.querySelector(".cursor");
let timeout;

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  function mouseStopped() {
    cursor.style.display = "none";
  }
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 2000);
});

document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});