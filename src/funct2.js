const form = document.querySelector('#reservation-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const date = document.querySelector('#date').value;
  const info = document.querySelector('#info').value;

  const subject = `New reservation from ${name}`;
  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0ADate: ${date}%0D%0AAdditional Information: ${info}`;
  const mailto = `mailto:youremail@example.com?subject=${subject}&body=${body}`;

  window.location.href = mailto; 
});

var image = document.getElementById('pizza-quattro-formaggi.jpg');
    var zoomInButton = document.getElementById('zoom-in-button');
    var zoomOutButton = document.getElementById('zoom-out-button');

    
    var scale = 1;

    
    zoomInButton.addEventListener('click', function() {
      scale += 0.1;
      image.style.transform = 'scale(' + scale + ')';
    });
    zoomOutButton.addEventListener('click', function() {
      scale -= 0.1;
      image.style.transform = 'scale(' + scale + ')';
    });




