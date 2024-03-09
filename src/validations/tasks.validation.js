const Joi = require('joi');

module.exports = {
  schema: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
  }),
};
