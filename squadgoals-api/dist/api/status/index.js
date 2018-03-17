'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var axios = require('axios');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    axios.get('/status').then(function (response) {
        var data = response.data.data;
        res.status(200).json(data);
    }).catch(function (err) {
        console.log(err);
        res.status(err.response.status).json({ message: err.response.data });
    });
});

exports.StatusRouter = router;