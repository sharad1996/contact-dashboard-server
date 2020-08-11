const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const messageSchema = new mongoose.Schema({
  senderId: { type: ObjectId },
  reveiverId: { type: ObjectId },
  receiverName: { type: String },
  senderName: { type: String },
  message: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('message', messageSchema);