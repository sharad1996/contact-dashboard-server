const Message = require('../models/message');

exports.sendMessage = async function (req, res, next) {
  const payload = {
    senderId: req.body.senderId,
    reveiverId: req.body.reveiverId,
    senderName: req.body.senderName,
    receiverName: req.body.receiverName,
    message: req.body.message
  };
  console.log('message payload is here', payload)
  try {
    let message = new Message(payload);
    message.save();
    res.status(200).json({ msg: 'message add successfully' });
  }
  catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

exports.getMessages = async function (req, res, next) {
  try {
    const response = await Message.find();
    if (response) {
      res.status(200).json(response)
    }
    else {
      res.status(400).json({ msg: '' })
    }
  }
  catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}