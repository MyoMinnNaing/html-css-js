const btn = document.getElementById("btn");
const email = document.getElementById("email");
const error = document.getElementById("error");
const main = document.querySelector("main");
let section = document.querySelector("section");

let confirm_email = document.getElementById("confirm-email");
let confirm_recu = document.getElementById("confirm-recu");

btn.onclick = function () {
  const userEmail = email.value;
  const isValidEmail = validateEmail(userEmail);
  if (!isValidEmail) {
    error.innerHTML = "Valid email required";
    error.style.color = "red";
    error.style.fontWeight = "bold";
    email.classList.add("errorClass");
    email.style.border = "1px solid red";
  } else {
    error.innerHTML = "";
    email.classList.remove("errorClass");
    email.style.border = "none";
    main.classList.add("display");
    section.classList.remove("display");
    confirm_email.innerHTML = userEmail;
  }
};

confirm_recu.onclick = function () {
  location.reload();
};

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.dir(emailRegex);
  return emailRegex.test(email);
}
