
// document.addEventListener("DOMContentLoaded", function() {
//     // Add event listener to the logout button
//     var logoutButton = document.getElementById("logoutButton");
//     logoutButton.addEventListener("click", function(event) {
//         // Call the confirmLogout function when the button is clicked
//         confirmLogout(event);
//     });
// });

// // Function to handle logout confirmation
// function confirmLogout(event) {
//     var confirmation = confirm("Are you sure you want to logout?");
//     if (!confirmation) {
//         event.preventDefault(); // Prevent default action if user cancels logout
//     } else {
//         // Redirect the user to the "home" page if they confirm logout
//         window.location.href = "log.html";
//     }
// }
document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the logout form
    var logoutForm = document.getElementById("logoutButton");
    logoutForm.addEventListener("submit", function(event) {
        // Call the confirmLogout function when the form is submitted
        confirmLogout(event);
    });
});

// Function to handle logout confirmation
function confirmLogout(event) {
    var confirmation = confirm("Are you sure you want to logout?");
    if (!confirmation) {
        event.preventDefault(); // Prevent form submission if user cancels logout
    }
}
