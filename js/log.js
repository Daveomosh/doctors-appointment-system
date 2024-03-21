
////////////////////////////////////////////////////////////
  // document.addEventListener('DOMContentLoaded', function() {
  //   var nextButton = document.getElementById('logIn');
  
  //   nextButton.addEventListener('click', function() {
    
  //       window.location.href = 'Book.html';
  //   });
  // });
  document.addEventListener("DOMContentLoaded", function () {
    const users = JSON.parse(localStorage.getItem("users"));
    console.log(users)
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        const username = usernameInput.value;
        const password = passwordInput.value;
        const user = users.find(
            (userItem) => userItem.username === username && userItem.password === password
        );
        console.log(user)
        if (user) {
            // Authentication successful, redirect to shop.html
            
            // Remove any existing error message
            const message = document.getElementById("error-message");
            message.textContent = "";

            let currentUser = {
              username:username,
              pasword: password, 
            
          };
          console.log(currentUser)
            window.location.href = "http://127.0.0.1:5500/Book.html"
localStorage.setItem("currentUser",JSON.stringify( currentUser))
           
            // console.log(currentUser)
        } else {
            // Authentication failed, display error message
            const message= document.getElementById("error-message");
            message.textContent = "Invalid username or password";
            // Clear the password field
            passwordInput.value = "";
            usernameInput.focus();
            
        }
      
    });
    
   
});
const isLoggedIn=document.getElementById("loginF")
const bookPage=document.getElementById("book")
const log=document.getAnimations("log")












