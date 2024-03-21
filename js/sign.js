// Form Validaion
// console.log("dfcytfvvuv")
const signupInputs = document.querySelectorAll("#signupForm input");
const message = document.getElementById("error-message");
const signupForm = document.getElementById("signupForm");
console.log(signupForm)
const loginInputs = document.querySelectorAll("#loginForm");
const userName = document.getElementById("username");
const password = document.getElementById("password");

console.log(message);

let allValidated = false;
function validateInputs(member) {
  const username = document.getElementById("signupUsername").value;
  const email = document.getElementById("signupEmail").value;
  // const usersData = JSON.parse(localStorage.getItem("users"));
  signupInputs.forEach((input) => {
    if (input.value === "") {
      message.textContent = "Kindly fill all the fields";
      input.style.border = "2px solid red";
      console.log(message);
    } 
    // else if (
    //   usersData.find(
    //     (user) => user.username === username || user.email === email
    //   )
    // ) {
    //   message.textContent = "User already exists";
    // }
     else {
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

      window.location.href = "http://127.0.0.1:5500/log.html";
    }
  }
};

signupForm.addEventListener(`submit`, (e) => {

  console.log(e)
  e.preventDefault();
  const user = {};

  validateInputs(user);
  saveUserToLocalStorage(user);
});


function checkEmailAvailability() {
  var email = document.getElementById("signupEmail").value;
  // Simulated list of existing emails (replace with your actual list)
  var existingEmails = [""];

  if (existingEmails.includes(email)) {
    document.getElementById("email-error").innerText =
      "Email is already in use.";
    return false; // Prevent form submission
  }
  return true; // Allow form submissi
}
