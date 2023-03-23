const form = document.getElementById("form");

form.addEventListener("focusin", (event) => {
  event.target.style.background = "orange";
});

form.addEventListener("focusout", (event) => {
  event.target.style.background = "";
});

let button = document.querySelector('#button');
let msg = document.querySelector('#oferta');

button.addEventListener('click', ()=>{
  msg.classList.toggle('reveal');
})