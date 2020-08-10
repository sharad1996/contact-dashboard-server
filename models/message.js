const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const messageSchema = new mongoose.Schema({
  senderId: { type: ObjectId },
  reviewerId: { type: ObjectId },
  reviewerName: { type: String },
  senderName: { type: String },
  message: { type: String },
});

module.exports = mongoose.model('message', messageSchema);