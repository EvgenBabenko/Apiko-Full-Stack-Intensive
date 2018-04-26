const fetch = require('node-fetch');

const fetchData = async url => {
    const responce = await fetch(url);
    
    return responce.json();
}

const joinToString = object => {
    let string = '';

    for (const key in object) {
        string += `${key}:${object[key]}, `
    }

    return string;
};

const toQueryString = params => params.join('&');

module.exports = {
    fetchData,
    joinToString,
    toQueryString,
}