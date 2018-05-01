 const ProfileSchema = {
    fullname: { type: String, required: true, lowercase: true, trim: true },
    post: String,
}

module.exports = ProfileSchema