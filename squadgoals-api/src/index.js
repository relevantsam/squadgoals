import { PORT_NUMBER, PRODUCTION_NODE_ENV } from './constants';

class App {
  constructor(token) {
    if(!token) throw "NO TOKEN";
  }
  run(port) {
    let { DbService } = require('./db');

    const db = new DbService();
    db.setup();

    const express = require('express');
    let { ApiRouter } = require('./api');
    
    const app = express();
    app.use('/api', ApiRouter);

    app.use('/', express.static(`${__dirname}/../../ui/build/`));

    // express will serve up index.html if it doesn't recognize the route
    app.get('*', (req, res) => {
      const path = require('path');
      res.sendFile(path.resolve(__dirname, '../../ui/build/', 'index.html'));
    });

    app.listen(port, () => console.log(`App started on ${port}`));
  }
}

if(process.env.NODE_ENV !== PRODUCTION_NODE_ENV) {
  const dotenv = require('dotenv').config('../../../.env');
  if(dotenv.error) throw dotenv.error;
  console.log('setting up local env');
}

if(!process.env.PUBG_TOKEN) throw "NO TOKEN";


const app = new App(process.env.PUBG_TOKEN);

app.run(PORT_NUMBER);