import { PORT_NUMBER, PUBG_API_URL, PUBG_API_TOKEN } from './constants';
import { ApiRouter } from './api';

const axios = require('axios');
const express = require('express');

axios.defaults.baseURL = PUBG_API_URL;
axios.defaults.headers.common['Authorization'] = PUBG_API_TOKEN;
axios.defaults.headers.common['Accept'] = 'application/vnd.api+json';

const app = express();
app.use('/api', ApiRouter);


app.listen(PORT_NUMBER, () => console.log(`App started on ${PORT_NUMBER}`));