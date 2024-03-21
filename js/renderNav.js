document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("currentUser") === null) {
    console.log("current user doesn't exist");
    document.getElementById("book").style.display = "none";
    document.getElementById("log").style.display = "block";
    document.getElementById("logout").style.display = "none";
  } else {
    document.getElementById("book").style.display = "block";
    document.getElementById("log").style.display = "none";
    document.getElementById("logout").style.display = "block";
    console.log("current user exist");
  }
});
