window.onscroll = function() {stickyNavbar()};

var navbar = document.querySelector('.sticky-nav');

var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}




const button = document.getElementById('myButton');

button.addEventListener('click', function() {
  button.classList.toggle('clicked');
  setTimeout(function() {
    window.location.href = 'pagina2.html';
  }, 500);
});