// Weather Dashboard — API practice. Suggested API: https://open-meteo.com/
// TODO 1: Create async getCoordinates(city) using the geocoding API.
// TODO 2: Create async getWeather(latitude, longitude) using the forecast API.
// TODO 3: Map weather codes to readable conditions and emojis.
// TODO 4: Handle loading, invalid cities and network errors.

const form = document.querySelector("#search-form");
const cityInput = document.querySelector("#city-input");
const statusText = document.querySelector("#status");
const weatherCard = document.querySelector("#weather-card");
const locationElement = document.querySelector("#location");
const conditionElement = document.querySelector("#condition");
const updatedElement = document.querySelector("#updated");
const iconElement = document.querySelector("#weather-icon");
const temperatureElement = document.querySelector("#temperature");
const feelsLikeElement = document.querySelector("#feels-like");
const humidityElement = document.querySelector("#humidity");
const windElement = document.querySelector("#wind");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  statusText.textContent = "TODO: Connect the weather API in script.js.";
});

// API endpoints to build with fetch() and async/await:
// Geocoding: https://geocoding-api.open-meteo.com/v1/search?name=CITY&count=1&language=en&format=json
// Forecast: https://api.open-meteo.com/v1/forecast?latitude=LAT&longitude=LON&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m
