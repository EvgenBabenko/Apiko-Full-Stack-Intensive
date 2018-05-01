const mongoose = require('mongoose');
const VoteSchema = require('./schema');

const Vote = mongoose.model('Vote', VoteSchema);

module.exports = Vote;