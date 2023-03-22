//eveniment 1 dblclick
const logo = document.getElementById("logo");
logo.addEventListener("dblclick", (ev) => {
  //alert("Bine ai venit pe site-ul nostru");
  ev.currentTarget.style.height = "10vh";
  ev.currentTarget.style.padding = "0";
  ev.currentTarget.style.border = "1px solid black";
});
//eveniment 2 mouseenter
const imageText = document.getElementById("our-products");
console.log({imageText});
imageText.addEventListener("mouseenter", (ev) => {
  ev.currentTarget.style.color = "pink";
  ev.currentTarget.style.border = "3px solid pink";
});
//eveniment 3 mouseleave
imageText.addEventListener("mouseleave", (ev) => {
  ev.currentTarget.style.color = "green";
  ev.currentTarget.style.border = "none";
});
//eveniment 4 click
const shoppingCart = document.querySelectorAll(".shopping-cart");
function cart (event) {
  console.log("s-a dat click pe shopping-cart", event);
};
shoppingCart.forEach((event) => {
  event.addEventListener("click", cart);
});
  

