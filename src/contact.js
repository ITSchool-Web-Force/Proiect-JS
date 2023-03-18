//eveniment 1
const btn = document.querySelector("#logo");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

//eveniment 2
const logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  alert("Bine ai venit pe site-ul nostru");
});

//eveniment 3
function logSubmit(event) {
  log.textContent = `Form Submitted!`;
  event.preventDefault();
}

const form = document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);


