//eveniment click pe shopping-cart
const shoppingCart = document.querySelectorAll(".shopping-cart");
function cart (event) {
  console.log("s-a dat click pe shopping-cart", event);
};
shoppingCart.forEach((event) => {
  event.addEventListener("click", cart);
});

//eveniment hashchange
window.onhashchange = function() {
  console.log('Hash changed!');
}

//evenimente transitionstart, transitionend
const message = document.querySelector(".message");
const banner = document.querySelector(".banner");
function bannerTransitions () {
  banner.addEventListener("transitionstart", () => {
    message.textContent = "Doar luna aceasta";
  });
  banner.addEventListener("transitionend", () => {
    message.textContent = "";
});
};
bannerTransitions();

//eveniment mouseenter
const imageText = document.getElementById("our-products");
console.log({imageText});
imageText.addEventListener("mouseenter", (ev) => {
  ev.currentTarget.style.color = "pink";
});

//eveniment mouseleave
imageText.addEventListener("mouseleave", (ev) => {
  ev.currentTarget.style.color = "green";
});