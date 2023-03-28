// play videoclip

const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("locatie"));

video.addEventListener("click", (event) => {
    video.play();
  });
  


  

 // adaugare locatie 

  document.getElementById("afisareadresa").addEventListener("click", function(){
    document.getElementById("text").innerText = "Sabareni Strada 133 nr.1 BIS";
});






 // se stocheaza o referinta la div.container

const buttonContainerEl = document.querySelector('#container');

// adaugare eveniment pe butoane
buttonContainerEl.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
    handleButtonClick(event);
  } else if (event.target.parentElement.tagName === 'BUTTON') {
    event.target.parentElement.click();
  }
});

function handleButtonClick(event) {
  // se stocheaza referinta din span la apasarea butonului
  const spanEl = event.target.querySelector('span');
  // schimbarea textului si setarea timpului de resetare
  spanEl.innerHTML = "Adaugat";
  setTimeout(() => {
    spanEl.innerHTML = "Adauga in cos";
  }, 1000);
}


// marire buttom


document.getElementById("afisareadresa").addEventListener("mouseover", mouseOver);
document.getElementById("afisareadresa").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("afisareadresa").style.fontSize = '16px';
  document.getElementById("afisareadresa").style.color = 'white';
  document.getElementById("afisareadresa").style.backgroundColor = 'red';

}

function mouseOut() {
  document.getElementById("afisareadresa").style.fontSize = '12px';
  document.getElementById("afisareadresa").style.color = 'white';
  document.getElementById("afisareadresa").style.backgroundColor = 'orange';
 
}


//Afisare banner consola

const mybanner = document.getElementById("mybanner");

mybanner.addEventListener("load", function () {
  console.log("Bannerul este afisat");
});