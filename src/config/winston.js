const morgan = require('morgan');
const logger = require('./logger');
const { CONFIG_REFERENCE } = require('./constants/config-constants');

morgan.token('message', (req, res) => res.locals.errorMessage || '');

const getIpFormat = () => (CONFIG_REFERENCE.ENVIRONMENT === 'production' ? ':remote-addr - ' : '');

const successResponseFormat = `${getIpFormat()}:method :url :status - response-time ms`;
const errorResponseFormat = `${getIpFormat()}:method :url :status - response-time ms - message: :message`;

const badRequestStatusCode = 400;

const successHandler = morgan(successResponseFormat, {
  skip: (req, res) => res.statusCode >= badRequestStatusCode,
  stream: { write: (message) => logger.info(message.trim()) },
});

const errorHandler = morgan(errorResponseFormat, {
  skip: (req, res) => res.statusCode < badRequestStatusCode,
  stream: { write: (message) => logger.info(message.trim()) },
});

module.exports = {
  successHandler,
  errorHandler,
};
