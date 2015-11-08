'use strict';

var express = require('express');
var controller = require('./response.controller');

var router = express.Router();

router.post('/send', controller.create);

module.exports = router;
