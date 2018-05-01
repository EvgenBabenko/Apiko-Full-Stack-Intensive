const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    tags: [String],
    createdAt: { type: Date, default: new Date() },
    createdById: { type: Schema.Types.ObjectId, ref: 'User' },
})

module.exports = QuestionSchema;