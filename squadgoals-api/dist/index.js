'use strict';

var _constants = require('./constants');

var _api = require('./api');

var axios = require('axios');
var express = require('express');
var path = require('path');

axios.defaults.baseURL = _constants.PUBG_API_URL;
axios.defaults.headers.common['Authorization'] = _constants.PUBG_API_TOKEN;
axios.defaults.headers.common['Accept'] = 'application/vnd.api+json';

var app = express();
app.use('/api', _api.ApiRouter);

app.use('/', express.static(__dirname + '/../../ui/build/'));

// express will serve up index.html if it doesn't recognize the route
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../../ui/build/', 'index.html'));
});

app.listen(_constants.PORT_NUMBER, function () {
  return console.log('App started on ' + _constants.PORT_NUMBER);
});