const modal = document.getElementById("modal");
const closeBtn = document.getElementsByClassName("close")[0];
const subscribeForm = document.getElementById("subscribe-form");
const emailInput = document.getElementById("email");
const subscribeBtn = document.getElementById("subscribe-btn");
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
  }
});

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
