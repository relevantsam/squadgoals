'use strict';
const fs = require('fs');
if(!fs.existsSync('./squadgoals-api/.env')) {
    fs.createReadStream('./squadgoals-api/.sample-env')
  .pipe(fs.createWriteStream('./squadgoals-api/.env'));
    console.log('Created .env file with default values in `/squadgoals-api` 🤟\nNow go update it with real live keys and secrets and stuff.\nWhen you\'re done, start the project with `yarn dev`');
} else {
    console.log('You\'re already set up with a .env file - just make sure it lines up with .sample-env then start the project with `yarn dev`');
}