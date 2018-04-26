const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3001/mongoose-test')
    .then(() => console.log('Connection'))
    .then(error => console.error(`An error occured: ${error}`))

