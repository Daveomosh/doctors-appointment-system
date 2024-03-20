document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const date = formData.get('date');
    const time = formData.get('time');
    const service = formData.get('service');
    
    const confirmationMessage = `Appointment booked for ${service} on ${date} at ${time}.`;
    
    document.getElementById('confirmation').innerText = confirmationMessage;
    
    // Here you can perform further actions like sending the data to the server for processing
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    var nextButton = document.querySelectorAll('.btn');

    // Add click event listener to the button
    nextButton.querySelectorAll('click', function() {
        // Redirect to the next page (Page 2)
        window.location.href = 'bookngform.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
  var nextButton = document.getElementById('button');

  nextButton.addEventListener('click', function() {
  
      window.location.href = 'contact.html';
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var nextButton = document.getElementById('submit');

  nextButton.addEventListener('click', function() {
  
      window.location.href = 'pay.html';
  });
});
