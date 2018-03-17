'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StatusRouter = undefined;

var _constants = require('../constants');

var axios = require('axios');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    axios.get('/status').then(function (response) {
        console.log(response);
        res.status(200).json({ version: response.data.attributes.version });
    }).catch(function (err) {
        console.log(err);
        res.status(err.response.status).json({ message: err.response.data });
    });
});

exports.StatusRouter = router;