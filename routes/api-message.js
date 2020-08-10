var express = require('express');
var router = express.Router();
const messageControllers = require('../controllers/message');

router.post('/getMessage', messageControllers.getMessage)

router.post('/addMessage', messageControllers.addMessage)

module.exports = router;
