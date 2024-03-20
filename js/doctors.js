document.addEventListener('DOMContentLoaded', function() {
    var nextButtons = document.querySelectorAll('.btn');

    nextButtons.forEach(function(button) {
        button.addEventListener('click', function() {
    
            window.location.href = 'bookingform.html';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var nextButton = document.getElementById('button');

    nextButton.addEventListener('click', function() {
    
        window.location.href = 'contact.html';
    });
});

