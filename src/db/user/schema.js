const mongoose = require('mongoose');

const ObjectId = mongoose.SchemaTypes.ObjectId;

const userProfileSchema = {
    fullname: { type: String, required: true, lowercase: true, trim: true },
    post: String,
}

const userServicesSchema = {
    password: { bcrypt: String },
    google: { fullName: String, accessToken: String, refreshToken: String },
}

const UserSchema = new mongoose.Schema({
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
    profile: userProfileSchema,
    services: userServicesSchema,
})

module.exports = UserSchema;