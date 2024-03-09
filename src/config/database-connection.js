const mongoose = require('mongoose');
const logger = require('./logger');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);

    logger.info('Database Connected');
  } catch (err) {
    logger.error(`Database connection error: ${err}`);

    throw new Error(err);
  }
};

module.exports = dbConnection();
