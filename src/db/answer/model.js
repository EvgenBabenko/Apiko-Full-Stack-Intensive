const mongoose = require('mongoose');
const AnswerSchema = require('./schema');

const Answer = mongoose.model('Answer', AnswerSchema);

module.exports = Answer;