const UserSchema = new mongoose.Schema({
  username: String,
})

const User = mongoose.model('user', UserSchema);