const logo = document.getElementById("logo");
logo.addEventListener("dblclick", (ev) => {
  ev.currentTarget.style.height = "10vh";
  ev.currentTarget.style.padding = "0";
  ev.currentTarget.style.border = "1px solid black";
});

const blog = document.getElementById("blog-title");
blog.addEventListener("click", (ev) => {
  alert("Bine ai venit pe site-ul nostru");
});