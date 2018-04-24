# Apiko-Full-Stack-Intensive
## `Lesson 12 - NodeJS. Introduction`

## `Instruction`
In the project directory:
### `npm install`
Install all dependencies

### `npm start ${city}`
where variable city, is the city which you want to find. For example `npm start Dnipro`. <br>
Runs the app in the console

## `Technical requirements`
- create a NodeJS weather client
- pass a city name via arguments (like node get-weather.js Ternopil)
- use [Google Geocode API](https://developers.google.com/maps/documentation/geocoding/start) to convert the city name to coordinates
- use [DarkSky API to get weather](https://darksky.net/dev) conditions for the city
- show the current weather conditions in the city (temperature, humidity, wind speed, etc.)
- if the city not found - show an appropriate error
