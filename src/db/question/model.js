const mongoose = require('mongoose');
const QuestionSchema = require('./schema');

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;