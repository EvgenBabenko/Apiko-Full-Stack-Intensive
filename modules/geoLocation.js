const { fetchData } = require('../utils');

const API_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json';

const geoLocation = async (apiKey, city) => {
    try {
        const { results: [ { formatted_address: adress, geometry: { location } } ] } = await fetchData(`${API_ENDPOINT}?address=${city}&key=${apiKey}`);
    
        return {adress, location}
    } catch(error) {
        console.log(error)
    }
}

module.exports = {
    geoLocation,
}