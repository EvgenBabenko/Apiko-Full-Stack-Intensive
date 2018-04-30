const mongoose = require('mongoose');
const AnswerSchema = require('./schema');

const Answer = mongoose.model('answer', AnswerSchema);

module.exports = Answer;