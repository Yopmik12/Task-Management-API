const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const compression = require('compression');
const morgan = require('./config/winston');

const { CONFIG_REFERENCE } = require('./config/constants/config-constants');

const app = express();

require('dotenv').config();
// require('./config/database-connection');

if (['development', 'staging', 'test'].includes(CONFIG_REFERENCE.ENVIRONMENT)) {
  app.use(morgan.errorHandler);
  app.use(morgan.successHandler);

  const cspDefaults = helmet.contentSecurityPolicy.getDefaultDirectives();
  delete cspDefaults['upgrade-insecure-requests'];

  app.use(
    helmet({
      contentSecurityPolicy: { directives: cspDefaults },
    }),
  );
} else {
  app.use(helmet());
}

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(xss());

app.use(compression());

app.use(cors());
app.options('*', cors());

app.get('/test', (req, res) => {
  res.send('Hello World!!');
});

module.exports = app;
