const Message = require('../models/message');

exports.addMessage = async function (req, res, next) {
  const payload = { senderId: req.body.senderId, reviewerId: req.body.reviewerId, senderName: req.body.senderName, reviewerName: req.body.reviewerName, message: req.body.message };

  try {
    let message = new Message(payload);
    message.save();
    res.status(200).json("added message");
  }
  catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

exports.getMessage = async function (req, res, next) {
  try {
    const response = await Message.find({ userId: req.body.userId });
    res.status(200).json(response);
  }
  catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}