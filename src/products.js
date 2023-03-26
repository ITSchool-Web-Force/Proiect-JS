// const angraOriginal = document.querySelector(".angra-img");
// const angraDetail = document.querySelector(".angra-det-img");

// angraOriginal.addEventListener("mouseover", function () {
//   angraOriginal.style.display = "none";
//   angraDetail.style.display = "block";
// });

// angraDetail.addEventListener("mouseout", function () {
//   angraOriginal.style.display = "block";
//   angraDetail.style.display = "none";
// });

const prodArea = document.querySelectorAll(".prod-area");

prodArea.forEach(function (area) {
  const originalImg = area.querySelector("img:first-of-type");
  const detailImg = area.querySelector("img:last-of-type");

  originalImg.addEventListener("mouseover", function () {
    originalImg.style.display = "none";
    detailImg.style.display = "block";
  });

  detailImg.addEventListener("mouseout", function () {
    originalImg.style.display = "block";
    detailImg.style.display = "none";
  });
});
