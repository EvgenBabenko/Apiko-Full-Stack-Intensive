const mongoose = require('mongoose');
const { User, Question, Answer, Vote } = require('./db')

mongoose.connect('mongodb://localhost:3001/test')
    .then(() => console.log('Connection is ready'))
    .catch(error => console.error(`An error occured: ${error}`));

const userDoc = {
    profile: {
        fullname: 'test3'
    },
    email: 'ddd@dgdghdh.gh'
}

const runQuery = async (model, data) => {
    try {
        const newQuery = await model.create(data);
    
        console.log(newQuery);
    } catch(error) {
        console.error(error)
    }
}

runQuery(User, userDoc);