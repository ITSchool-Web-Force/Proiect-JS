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
//eveniment dblclick
const logo = document.getElementById("logo");
logo.addEventListener("dblclick", (ev) => {
  ev.currentTarget.style.height = "10vh";
  ev.currentTarget.style.padding = "0";
  ev.currentTarget.style.border = "1px solid black";
});
//eveniment mouseenter
const imageText = document.getElementById("our-products");
console.log({imageText});
imageText.addEventListener("mouseenter", (ev) => {
  ev.currentTarget.style.color = "pink";
  ev.currentTarget.style.border = "3px solid pink";
});
//eveniment mouseleave
imageText.addEventListener("mouseleave", (ev) => {
  ev.currentTarget.style.color = "green";
  ev.currentTarget.style.border = "none";
});