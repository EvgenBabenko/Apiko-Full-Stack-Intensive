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

const runQuery = async () => {
    try {
        const newQuery = await User.create(userDoc);
    
        console.log('create new: ', newQuery);

        await User.update({ email: 'ddd@dgdghdh.gh' }, { $set: { email: 'ddd@fd.com' } })
            .then(() => console.log('updated'));

        /*
        or other syntax without callback with exec method

        await User.update({ email: 'ddd@dgdghdh.gh' }, { $set: { email: 'ddd@fd.com' } }).exec();
        */

        await User.remove({ email: 'ddd@fd.com' })
            .then(() => console.log('removed'));

        /*
        or other syntax without callback with exec method

        await User.remove({ email: 'ddd@dgdghdh.gh' }).exec();
        */
        
    } catch(error) {
        console.error(error)
    }
}

runQuery();