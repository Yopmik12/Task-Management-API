const express = require('express');
const controller = require('./register.controller');

const router = express.Router();

router.get('/', controller.registerController);

module.exports = router;
