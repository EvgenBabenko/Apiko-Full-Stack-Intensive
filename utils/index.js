const fetch = require('node-fetch');

const fetchData = async url => {
    const responce = await fetch(url);
    
    return responce.json();
}

const joinToString = object => Object.values(object).join();

const toQueryString = params => params.join('&');

module.exports = {
    fetchData,
    joinToString,
    toQueryString,
}