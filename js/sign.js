// Form Validaion

const signupInputs = document.querySelectorAll("#signupForm input");
const message = document.getElementById("error-message");
const signupForm = document.getElementById("signupForm");
const loginInputs=document.querySelectorAll("#loginForm");
const userName=document.getElementById("username");
const password=document.getElementById("password");


console.log(message);

let allValidated = false;
function validateInputs(member) {

  signupInputs.forEach((input) => {
    if (input.value === "") {
      message.textContent = "Kindly fill all the fields";
      input.style.border = "2px solid red";
      console.log(message);
    } else {
      message.textContent = "";
      input.style.border = "black";

      member[`${input.name}`] = input.value;
    }
  });
}

const saveUserToLocalStorage = (member) => {
  let users = [];

  if (message.textContent === "") {
    allValidated = true;
  }

  //saving o local storege
  if (allValidated === true) {
    if (localStorage.getItem("users") === null) {
      //create user
      users.push(member);
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      users = JSON.parse(localStorage.getItem("users"));
      users.push(member);
      localStorage.setItem("users", JSON.stringify(users));
    
      window.location.href="http://127.0.0.1:5500/log.html";}
  }
  
};

signupForm.addEventListener(`submit`, (e) => {
  e.preventDefault();
  const user = {};

  validateInputs(user);
  saveUserToLocalStorage(user);
});



loginInputs.forEach((input) => {
  if (input.value === "") {
    message.textContent = "Kindly fill all the fields";
    input.style.border = "2px solid red";
    console.log(message);
  } else {
    message.textContent = "";
    input.style.border = "black";

    user[`${input.name}`] = input.value;
  }
  validateInputs()
});