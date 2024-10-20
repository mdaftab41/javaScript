function fetchWeatherWithXHR(city) {
    const apiKey = 'your_api_key_here'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object
    xhr.open('GET', url, true); // Initialize a GET request

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            const data = JSON.parse(xhr.responseText); // Parse the JSON response
            console.log('Weather Data (XHR):', data); // Log the weather data
        } else {
            console.error('Request failed. Status:', xhr.status);
        }
    };

    xhr.onerror = function() {
        console.error('Request failed due to a network error.');
    };

    xhr.send(); // Send the request
}

// Call the function to fetch weather data
fetchWeatherWithXHR('London');
