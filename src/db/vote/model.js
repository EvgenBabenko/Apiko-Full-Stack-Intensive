const mongoose = require('mongoose');
const VoteSchema = require('./schema');

const Vote = mongoose.model('vote', VoteSchema);

module.exports = Vote;