var express = require('express');
var router = express.Router();
const messageControllers = require('../controllers/message');

router.get('/getMessages', messageControllers.getMessages)

router.post('/sendMessage', messageControllers.sendMessage)

module.exports = router;
