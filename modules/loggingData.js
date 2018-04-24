const fs = require('fs');

exports.loggingData = (url, data) => {
    fs.appendFile(url, `${data} \r\n`, err => {
        if(err) console.log('something wrong: ', err);

        console.log(`data logged to ${url}`)
    })
}

// module.exports = {
//     loggingData
// }