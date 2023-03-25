//Meniu
const openNav = document.querySelector('.menu-bar button');
const closeNav = document.querySelector('.close-nav button');
const theNavbar = document.querySelector('.navbar');

window.addEventListener("resize", (event) => {        
        if(theNavbar.classList.contains('show')) {
            showHide();
        } 
});

openNav.addEventListener("click", (event) => {        
        showHide();
        document.body.style.overflowY = 'hidden';
});

closeNav.addEventListener("click", (event) => {        
        showHide();
        document.body.style.overflowY = 'visible';
});

function showHide() {
    theNavbar.classList.toggle('show');
}