const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    description: { type: String, required: true },
    title: String,
    questionId: { type: Schema.Types.ObjectId, ref: 'Question' },
    createdAt: { type: Date, default: new Date() },
    createdById: { type: Schema.Types.ObjectId, ref: 'User' },
})

module.exports = AnswerSchema;