const { argv } = require('yargs');
const { config } = require('dotenv');
const { geoLocation, getWeather, loggingData } = require('./modules');

const { _ : cities } = argv;

config();
const { GOOGLE_GEOCODE_API_KEY, DARK_SKY_API_KEY } = process.env;

const URL_LOGGED_DATA = './history.log';

console.log(process.argv, argv);

console.log(cities);

// // if (!cities.length) console.log(`ERROR: Invalid input! Try again without -- or -`)

const gg = async city => {
    try {
        const { adress, location: { lat, lng } } = await geoLocation(GOOGLE_GEOCODE_API_KEY, city);
        const { summary, temperature, humidity } = await getWeather(DARK_SKY_API_KEY, lat, lng);

        const dataToLog = `${city} ${adress} ${summary, temperature, humidity}`;
        await loggingData(URL_LOGGED_DATA, dataToLog);

        console.log(city, adress, lat, lng, currentlyWeather);
    } catch(error) {
        console.error(error)
    }
}

cities.forEach(city => gg(city));

// const gg = async () => {
//     await loggingData(URL_LOGGED_DATA, 'dgdfg');
// }

// gg();