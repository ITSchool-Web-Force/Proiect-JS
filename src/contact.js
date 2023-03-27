
let button = document.querySelector('#button');
let msg = document.querySelector('#oferta');

button.addEventListener('mouseover', () => {
  msg.classList.toggle('reveal');
})

const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);
  
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => alert("Multumim! Mesajul a fost transmis"))
    .catch((error) => alert(error));
    form.reset();
};

document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);
 