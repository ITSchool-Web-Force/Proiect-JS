let ratioWeight = document.getElementById("ratio-weight");
let ratioLength = document.getElementById("ratio-length");
let weight = document.getElementById("weight");
let length = document.getElementById("length");

let calculateWeight = () => {
  weight.value = parseFloat((weight.value * 2.2).toFixed(2));
};

let calculateLength = () => {
  length.value = parseFloat((length.value * 0.39).toFixed(2));
};

weight.addEventListener("input", calculateWeight);
length.addEventListener("input", calculateLength);
ratioWeight.addEventListener("input", calculateWeight);
ratioLength.addEventListener("input", calculateLength);
