const hamburger = document.querySelector(".hamburger");
const menuItems = document.querySelector(".menu-items");
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const links = document.querySelectorAll('a[href^="#"]');
const btnUrg = document.querySelector(".urgente");
const originalText = btnUrg.textContent;
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnBianca = document.querySelector("#Bianca");
const closeHamburger = document.querySelector("main");

let currentSlide = 0;

hamburger.addEventListener("click", () => {
  menuItems.classList.toggle("show");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    menuItems.classList.remove("show");
  }
});
closeHamburger.addEventListener("click", function () {
  menuItems.classList.remove("show");
});

btnUrg.addEventListener("mouseover", function () {
  btnUrg.textContent = "0757286893";
});
btnUrg.addEventListener("mouseout", function () {
  btnUrg.textContent = originalText;
});

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnBianca.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[currentSlide].style.display = "block";
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
}

prev.addEventListener("click", prevSlide);

next.addEventListener("click", nextSlide);

showSlide();

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
    menuItems.classList.toggle("show");
  });
});
