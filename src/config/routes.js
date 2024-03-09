const express = require('express');
const registerRoutes = require('../endpoints/register/register.route');

const router = express.Router();

const DefaultRoutes = [
  {
    path: '/register',
    route: registerRoutes,
  },
];

DefaultRoutes.forEach((el) => {
  router.use(el.path, el.route);
});

module.exports = router;
