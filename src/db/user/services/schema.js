const ServicesSchema = {
    password: { bcrypt: String },
    google: { fullName: String, accessToken: String, refreshToken: String },
}

module.exports = ServicesSchema;