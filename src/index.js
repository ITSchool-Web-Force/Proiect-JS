const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const subscribeForm = document.querySelector(".subscribe-form");
const emailInput = document.querySelector(".subscribe-input");
const subscribeBtn = document.querySelector(".subscribe-btn");
const modalShown = localStorage.getItem("modalShown");

if (!modalShown) {
  setTimeout(function () {
    modal.style.display = "block";
  }, 5000);
}

subscribeForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (emailInput.value) {
    console.log("Subscribed with email: " + emailInput.value);
    modal.style.display = "none";
    const subscribeEvent = new Event("userSubscribed");
    document.dispatchEvent(subscribeEvent);
    //localStorage.setItem("modalShown", "true");
  }
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

localStorage.removeItem("modalShown");
