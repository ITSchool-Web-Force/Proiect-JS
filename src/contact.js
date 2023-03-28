const ribbon = document.querySelector(".ribbon");
const trigger = document.querySelector(".user-icon");
const logIn = document.querySelector(".log-in-group");

trigger.addEventListener("click", function () {
  ribbon.classList.toggle("active");

  if (ribbon.classList.contains("active")) {
    setTimeout(function () {
      logIn.classList.add("active");
    }, 150);
  } else {
    logIn.classList.remove("active");
  }
});

const loginBtn = document.querySelector(".login-btn");
const loginForm = document.querySelector(".account");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = document.querySelector(".input-email");
  const passwordInput = document.querySelector(".input-password");
  console.log(
    "Email address: ",
    emailInput.value,
    `& Password:`,
    passwordInput.value
  );
});
