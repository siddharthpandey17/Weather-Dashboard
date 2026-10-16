# Weather Dashboard 🌦️

Build a responsive weather app. The HTML/CSS starter is ready; the API integration is intentionally unfinished.

## Features
- [ ] Search by city name
- [ ] Fetch coordinates from Open-Meteo Geocoding
- [ ] Fetch current weather from Open-Meteo Forecast
- [ ] Show temperature, feels-like temperature, humidity and wind
- [ ] Map weather codes to readable conditions and icons
- [ ] Loading, invalid-city and network-error states
- [ ] Responsive mobile design
- [ ] Bonus: recent searches and Celsius/Fahrenheit toggle

## API (free, no API key required)
Geocoding endpoint:
`https://geocoding-api.open-meteo.com/v1/search?name=CITY&count=1&language=en&format=json`

Forecast endpoint:
`https://api.open-meteo.com/v1/forecast?latitude=LAT&longitude=LON&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m`

Replace CITY, LAT and LON with real values. Use `fetch()` and `async/await`.

## Run
Extract the ZIP, open this folder in VS Code and open `index.html` or use Live Server.

## GitHub
Create a `weather-dashboard` repository and use your normal Git workflow: `git add .`, `git commit -m "Build weather dashboard"`, `git push`.
