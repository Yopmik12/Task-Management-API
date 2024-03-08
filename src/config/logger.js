const winston = require('winston');
const { CONFIG_REFERENCE } = require('./constants/config-constants');

const logger = winston.createLogger({
  level: CONFIG_REFERENCE.ENVIRONMENT === 'development' ? 'debug' : 'info',
  format: winston.format.combine(
    CONFIG_REFERENCE.ENVIRONMENT === 'development'
      ? winston.format.colorize()
      : winston.format.uncolorize(),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.printf(({ level, message, stack }) => `${level}: ${message} ${stack ?? ''}`),
  ),
  transports: [
    new winston.transports.Console({
      stderrLevels: ['error'],
    }),
  ],
});

module.exports = logger;
