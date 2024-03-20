
////////////////////////////////////////////////////////////
  // document.addEventListener('DOMContentLoaded', function() {
  //   var nextButton = document.getElementById('logIn');
  
  //   nextButton.addEventListener('click', function() {
    
  //       window.location.href = 'Book.html';
  //   });
  // });
  document.addEventListener("DOMContentLoaded", function () {
    const users = [
        { username: "username", password: "password" },
    //     { username: "user2", password: "password2" },
    ];
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        const username = usernameInput.value;
        const password = passwordInput.value;
        const user = users.find(
            (user) => user.username === username && user.password === password
        );
        if (user) {
            // Authentication successful, redirect to shop.html
            localStorage.setItem("username", username);
            // Remove any existing error message
            const message = document.getElementById("erro-message");
            message.textContent = "";
            
        } else {
            // Authentication failed, display error message
            const message= document.getElementById("error-message");
            message.textContent = "Invalid username or password";
            // Clear the password field
            passwordInput.value = "";
            usernameInput.focus();
            
        }
        window.location.href = "Book.html"
    });
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
     
        // window.location.href = "";
    }
});












