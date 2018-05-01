const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = require('./profile');
const ServicesSchema = require('./services');

const UserSchema = new Schema({
    email: { 
        type: String,
        required: true,
        validate: { 
            validator: function(v) {
                return /^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9_\.-]+)\.([a-zA-Z\.]{2,6})$/.test(v);
            },
            message: '{VALUE} is not a valid email!'
        }
    },
    profile: ProfileSchema,
    services: ServicesSchema,
})

module.exports = UserSchema;