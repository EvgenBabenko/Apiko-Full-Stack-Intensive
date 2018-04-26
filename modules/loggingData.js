const fs = require('fs');
const { joinToString } = require('../utils');

const loggingData = (url, data) => {
    const dataToLog = joinToString(data);
    
    fs.appendFile(url, `${dataToLog} \r\n`, err => {
        if(err) console.log('something wrong: ', err);

        console.log(`data logged to ${url}`)
    })
}

module.exports = loggingData;