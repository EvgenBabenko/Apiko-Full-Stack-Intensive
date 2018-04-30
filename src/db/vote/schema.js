const mongoose = require('mongoose');

const ObjectId = mongoose.SchemaTypes.ObjectId;

const VoteSchema = new mongoose.Schema({
    isPositive: Boolean,
    createdAt: { type: Date, default: new Date() },
    answerId: ObjectId,
    createdById: ObjectId,
})

module.exports = VoteSchema;