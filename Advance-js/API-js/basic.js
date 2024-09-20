const apiUrl = 'https://api.example.com/submit';

const contactForm = document.getElementById('contact-form');
const responseMessage = document.getElementById('response-message');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(contactForm);

  const requestOptions = {
    method: 'POST',
    body: formData,
  };

  fetch(apiUrl, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      responseMessage.textContent = data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
});


// Define the API URL
const apiUrl1 = 'https://api.example.com/data';

// Make a GET request
fetch(apiUrl1)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


