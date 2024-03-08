const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');

const app = express();

require('dotenv').config();

// app.use(helmet([
//     contentSecurityPolicy: {directives: csp}
// ]))
