const apiKey = '3fd1fc3f70mshd6400f3464ed60cp1e69e2jsn8c13af75e1ba'; // Replace with your real WeatherAPI key
const weatherApiUrl = 'https://weatherapi-com.p.rapidapi.com/current.json';

// Function to get weather
function getWeather() {
    const city = document.getElementById('cityInput').value.trim();

    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    fetch(`${weatherApiUrl}?q=${city}`, options)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert('City not found');
                return;
            }

            // Display weather info
            const city=document.getElementById('cityName').innerText = data.location.name;
            document.getElementById('temperature').innerText = data.current.temp_c;
            document.getElementById('condition').innerText = data.current.condition.text;
            document.getElementById('region').innerText = data.location.region;
            document.getElementById('country').innerText = data.location.country;
            document.getElementById('localtime').innerText = data.location.localtime;

            document.getElementById('weatherInfo').style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('An error occurred while fetching weather data.');
        });
}

// Event listener for the button
document.getElementById('getWeatherBtn').addEventListener('click', getWeather);
