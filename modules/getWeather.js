const { fetchData, toQueryString } = require('../utils');

const queryStringParam = [
    'exclude=minutely,hourly,daily,alerts,flags',
    'units=si',
];

const API_ENDPOINT = 'https://api.darksky.net/forecast';

const queryString = toQueryString(queryStringParam);

const getWeather = async (apiKey, lat, lng) => {
    try {
        const { currently: currentlyWeather } = await fetchData(`${API_ENDPOINT}/${apiKey}/${lat},${lng}?${queryString}`)

        return currentlyWeather;
    } catch(error) {
        throw new Error(`Не удалось получить погоду`)
    }
}

module.exports = getWeather;