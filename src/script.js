function setHamburgerMenu() {
    const icon = document.getElementById("hamburgerIcon");
    const x = document.getElementById("hamburgerMenu");
    
    icon.addEventListener("click", () => {
      if (x.style.display === "flex") {
        x.style.display = "none";
      } else {
        x.style.display = "flex";
      }
    });
  }
  
function setBackToTopButton() {
  const button = document.getElementById("backToTop");

  document.addEventListener("scroll", () => {
    if(document.documentElement.scrollTop < 300)
      button.style.display = "none";
    else
      button.style.display = "block";
  })

  button.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  })
}

window.onload = function() {
  setHamburgerMenu();
  setBackToTopButton();
};