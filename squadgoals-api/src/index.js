import { PORT_NUMBER, PUBG_API_URL, PRODUCTION_NODE_ENV } from './constants';
import { ApiRouter } from './api';

const axios = require('axios');
const express = require('express');
const path = require('path');

if(process.env.NODE_ENV !== PRODUCTION_NODE_ENV) {
  const dotenv = require('dotenv').config('../../../.env');
  if(dotenv.error) throw dotenv.error;
  console.log('setting up local env');
}

const API_TOKEN = process.env.PUBG_TOKEN;
console.log(process.env);
if(!API_TOKEN) throw "NO TOKEN";

axios.defaults.baseURL = PUBG_API_URL;
axios.defaults.headers.common['Authorization'] = API_TOKEN;
axios.defaults.headers.common['Accept'] = 'application/vnd.api+json';

const app = express();
app.use('/api', ApiRouter);

app.use('/', express.static(`${__dirname}/../../ui/build/`));

// express will serve up index.html if it doesn't recognize the route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../ui/build/', 'index.html'));
});

app.listen(PORT_NUMBER, () => console.log(`App started on ${PORT_NUMBER}`));