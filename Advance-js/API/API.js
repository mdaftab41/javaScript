async function fetchWeather(city) {
    const apiKey = 'your_api_key_here'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(url); // Make a GET request
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // Parse the JSON response
        console.log('Weather Data (Fetch):', data); // Log the weather data
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Call the function to fetch weather data
fetchWeather('London');
