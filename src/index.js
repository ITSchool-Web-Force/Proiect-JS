//hamburger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", mobileMenu);

hamburger.onclick = function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
};

/*feature to close hamburger menu when u click outside of it. */

document.onclick = function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
};

//slider

let imageNumber = 1;
displayPic(imageNumber);

/*without this 2 window. lines it throws an error. function must be
 from global scope to module scope*/
window.nextpic = nextpic;
window.currentPic = currentPic;

function nextpic(nr) {
  displayPic((imageNumber += nr));
}

function currentPic(nr) {
  displayPic((imageNumber = nr));
}

function displayPic(nr) {
  let i;
  let pic = document.getElementsByClassName("pic");
  let dots = document.getElementsByClassName("dot");

  if (nr > pic.length) {
    imageNumber = 1;
  }

  if (nr < 1) {
    imageNumber = pic.length;
  }

  for (i = 0; i < pic.length; i++) {
    pic[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  pic[imageNumber - 1].style.display = "block";
  dots[imageNumber - 1].className += " active";
}

//alert copyright

const copy = document.querySelector(".copy-me");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-button");

copy.addEventListener("copy", () => {
  modal.show();
});

closeModal.addEventListener("click", () => {
  modal.close();
});


// update copyright year

const yearSpan = document.querySelector("#current-year");
const currentYear = new Date();
yearSpan.innerText = currentYear.getFullYear();

//interface with tabs

const trainerButtons = document.querySelectorAll(".box button");
const articleTabs = document.querySelectorAll(".tabs article");

// trainerButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     trainerButtons.forEach((button) => button.classList.remove("active"));
//     button.classList.add("active");
//     articleTabs.forEach((tab) => tab.classList.remove("active"));

//     const dataTarget = button.getAttribute("data-target");
//     document.querySelector(dataTarget).classList.add("active");
//   });
// });

// with dataset 👇🏻

trainerButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    trainerButtons.forEach((button) => button.classList.remove("active"));
    e.target.classList.add("active");
    articleTabs.forEach((tab) => tab.classList.remove("active"));

    const eachArticle = document.querySelector(e.target.dataset.target);
    eachArticle.classList.add("active");
  });
});

// bmi calculator

/*bmi formula 

[weight(kg) / height(cm)/ height(cm)] x 10,000
*/

/*same as before withe slider, without this window. line it throws an error. function must be
 from global scope to module scope*/

const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
  let weight = document.querySelector("#weight").value;
  let height = document.querySelector("#height").value;

  let bmi = (weight / height / height) * 10000;

  //console.log(bmi);

  if (height == "" || weight == "") {
    alert("Please fill out the input fields!");
    return;
  }

  document.querySelector("#heading").innerText = "Your BMI is:";
  document.querySelector("#bmi-output").innerText = bmi.toFixed(2);

  let status = '';

  // rewriting the color of paragraf with class comment using DOM
  let comment = document.querySelector('.comment');

  if (bmi <= 25) {
    status = "the healthy weight range";
    comment.style.color ="green";
  } else if (bmi >= 25 && bmi <= 30.50) {
    status = "the overweight range";
    comment.style.color ="red";
  } else if (bmi >= 31) {
    status = "the obesity range";
    comment.style.color ="red";
  }

  document.querySelector(".comment").innerHTML = `Comment: you are within ${status}`;

  //console.log(status);
});

window.reload = reload;
function reload() {
  window.location.reload();
}

// hashchange event, does the same thing as with the id but it doesn t refresh the page

const hashtags = document.querySelectorAll(
  "schedule, pricing, contact, testimonials, contact, trainers"
);

window.addEventListener("hashchange", () => {
  hashtags.textContent = window.location.hash;
});



// creating object + display object values
let table = [
  {
  "date": "27 march 2023",
  "hour": "10:00 - 12:00",
  "type": "yoga",
  "mode": "online training",
  },
  {
    "date": "10 april 2023",
    "hour": "15:00 - 23:00",
    "type": "bodybuilding",
    "mode": "at the gym",
  },
  {
    "date": "1 june 2023",
    "hour": "06:00 - 9:00",
    "type": "tae bo",
    "mode": "online training",
  }
];

// console.log(table);


const starting = document.getElementsByClassName('starting');
const hour = document.getElementsByClassName('hour');
const type = document.getElementsByClassName('type');
const mode = document.getElementsByClassName('mode');


table.forEach((value)=> {
  let itemP = document.createElement('P');
  let itemPText = document.createTextNode(`${value.date}`);
  itemP.appendChild(itemPText);
 starting[0].appendChild(itemP);
})

table.forEach((value)=> {
  let itemP = document.createElement('P');
  let itemPText = document.createTextNode(`${value.hour}`);
  itemP.appendChild(itemPText);
 hour[0].appendChild(itemP);
})

table.forEach((value)=> {
  let itemP = document.createElement('P');
  let itemPText = document.createTextNode(`${value.type}`);
  itemP.appendChild(itemPText);
 type[0].appendChild(itemP);
})

table.forEach((value)=> {
  let itemP = document.createElement('P');
  let itemPText = document.createTextNode(`${value.mode}`);
  itemP.appendChild(itemPText);
 mode[0].appendChild(itemP);
})