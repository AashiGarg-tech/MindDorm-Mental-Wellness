const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  avatarUrl: { type: String },
  email: { type: String }, // not exposed in frontend
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);