const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  phoneNumber: { type: Number },
  company: { type: String },
  address: { type: String },
  color: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema);

