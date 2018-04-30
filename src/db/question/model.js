const mongoose = require('mongoose');
const QuestionSchema = require('./schema');

const Question = mongoose.model('user', QuestionSchema);

module.exports = Question;