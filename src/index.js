

const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () =>{
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true")
})

setTimeout( () => {
  if (!localStorage.getItem("cookieBannerDisplay"))
  cookieContainer.classList.add("active");
}, 2000);

const carousel = new bootstrap.Carousel('#myCarousel')

const rotate = (EL) => {
    let ang = 0; 
    let angStart = 0;
    let isStart = false;
    const angXY = (ev) => {
      const bcr = EL.getBoundingClientRect();
      const radius = bcr.width / 2;
      const { clientX, clientY } = ev.touches ? ev.touches[0] : ev;
      const y = clientY - bcr.top - radius; 
      const x = clientX - bcr.left - radius;
      return Math.atan2(y, x);
    };
    
    const mousedown = (ev) => {
      isStart = true;
      angStart = angXY(ev) - ang;
    };
  
    const mousemove = (ev) => {
      if (!isStart) return;
      ev.preventDefault();
      ang = angXY(ev) - angStart;
      EL.style.transform = `rotateZ(${ang}rad)`;
    };
  
    const mouseup = () => {
      isStart = false; 
    };
  
    EL.addEventListener("mousedown", mousedown);
    document.addEventListener("mousemove", mousemove);
    document.addEventListener("mouseup", mouseup);
  };
  
  document.querySelectorAll(".rotate").forEach(rotate);