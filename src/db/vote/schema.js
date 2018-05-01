const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
    isPositive: Boolean,
    createdAt: { type: Date, default: new Date() },
    answerId: { type: Schema.Types.ObjectId, ref: 'Answer' },
    createdById: { type: Schema.Types.ObjectId, ref: 'User' },
})

module.exports = VoteSchema;