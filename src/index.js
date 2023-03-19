const openNav = document.querySelector('.menu-bar button');
const closeNav = document.querySelector('.close-nav button');
const Navbar = document.querySelector('.navbar');

window.addEventListener("resize", (event) => {        
        if(Navbar.classList.contains('show')) {
            showHide();
        } 
});

openNav.addEventListener("click", (event) => {        
        showHide();
});

closeNav.addEventListener("click", (event) => {        
        showHide();
});

function showHide() {
    Navbar.classList.toggle('show');
}