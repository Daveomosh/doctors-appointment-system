document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get form inputs
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();

        // Simple validation
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // You can add more sophisticated email validation here
        
        // If all fields are filled and validated, submit the form
        // For demonstration purposes, let's log the data instead
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // You can send the form data to a server using AJAX here, or perform any other actions
        // Example:
        /*
        fetch('your-server-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        })
        .then(response => {
            if (response.ok) {
                // Handle success
            } else {
                // Handle error
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
        */
        
        // Reset the form after submission
        contactForm.reset();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var nextButton = document.getElementById('button');

    nextButton.addEventListener('click', function() {
    
        window.location.href = 'contact.html';
    });
});
