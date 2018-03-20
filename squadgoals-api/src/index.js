import { PORT_NUMBER, PRODUCTION_NODE_ENV } from './constants';
import { ApiRouter } from './api';

const express = require('express');
const path = require('path');

if(process.env.NODE_ENV !== PRODUCTION_NODE_ENV) {
  const dotenv = require('dotenv').config('../../../.env');
  if(dotenv.error) throw dotenv.error;
  console.log('setting up local env');
}

const API_TOKEN = process.env.PUBG_TOKEN;
if(!API_TOKEN) throw "NO TOKEN";

const app = express();
app.use('/api', ApiRouter);

app.use('/', express.static(`${__dirname}/../../ui/build/`));

// express will serve up index.html if it doesn't recognize the route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../ui/build/', 'index.html'));
});

app.listen(PORT_NUMBER, () => console.log(`App started on ${PORT_NUMBER}`));