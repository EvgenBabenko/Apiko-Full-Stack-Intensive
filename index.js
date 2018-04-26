const { argv } = require('yargs');
const { config } = require('dotenv');
const { geoLocation, getWeather, loggingData } = require('./modules');
const { joinToString } = require('./utils');

const { _ : cities } = argv;

config();
const { GOOGLE_GEOCODE_API_KEY, DARK_SKY_API_KEY } = process.env;

const URL_LOGGED_DATA = './history.log';

if (!cities.length) console.log(`ERROR: Empty string! Try again without -- or -`)

const gg = async city => {
    try {
        const currentTime = new Date().toLocaleString();
        const { adress, location: { lat, lng } } = await geoLocation(GOOGLE_GEOCODE_API_KEY, city);
        const { summary, temperature, humidity, windSpeed, visibility } = await getWeather(DARK_SKY_API_KEY, lat, lng);

        const gatheringDataToLog = {
            time: currentTime,
            search: city,
            'finded adress': adress,
            summary,
            temperature,
            humidity,
            windSpeed,
            visibility,
        }

        await loggingData(URL_LOGGED_DATA, gatheringDataToLog);

        console.log(city, adress, gatheringDataToLog);
    } catch(error) {
        console.error(error)
    }
}

cities.forEach(city => gg(city));