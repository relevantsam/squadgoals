'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApiRouter = undefined;

var _status = require('./status');

var express = require('express');
var router = express.Router();

router.use('/status', _status.StatusRouter);

exports.ApiRouter = router;