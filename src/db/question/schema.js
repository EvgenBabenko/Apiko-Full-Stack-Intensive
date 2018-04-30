const mongoose = require('mongoose');

const ObjectId = mongoose.SchemaTypes.ObjectId;

const QuestionSchema = new mongoose.Schema({
    title: String,
    description: String,
    tags: [String],
    createdAt: { type: Date, default: new Date() },
    createdById: ObjectId,
})

module.exports = QuestionSchema;