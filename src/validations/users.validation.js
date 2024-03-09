const Joi = require('joi');

module.exports = {
  schema: Joi.object().keys({
    name: Joi.string().require(),
    age: Joi.string().require(),
    username: Joi.string().require(),
    password: Joi.string().require(),
  }),
  location: 'body',
};
