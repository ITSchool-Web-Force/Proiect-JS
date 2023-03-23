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
window.calcBmi = calcBmi;

function calcBmi() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  let bmi = (weight / height / height) * 10000;

  // console.log(bmi);

  document.getElementById("heading").innerHTML = "Your BMI is:";
  document.getElementById("bmi-output").innerHTML = bmi.toFixed(2);

  if (bmi <= 25) {
    document.getElementById("message").innerHTML =
      "You are within the healthy weight range";
  } else if (bmi >= 25 && bmi <= 30) {
    document.getElementById("message").innerHTML =
      "You are within the overweight range";
  } else if (bmi >= 31) {
    document.getElementById("message").innerHTML =
      "You are within the obesity range";
  }
}

function reload() {
  window.location.reload();
}


