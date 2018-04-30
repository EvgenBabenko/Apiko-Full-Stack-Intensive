const mongoose = require('mongoose');

const ObjectId = mongoose.SchemaTypes.ObjectId;

const AnswerSchema = new mongoose.Schema({
    description: { type: String, required: true },
    title: { type: String, required: true },
    questionId: ObjectId,
    createdAt: { type: Date, default: new Date() },
    createdById: ObjectId
})

module.exports = AnswerSchema;