const express = require('express');

const router = express.Route();

const DefaultRoutes = [];

console.log(0);

DefaultRoutes.forEach((el) => {
  router.use(el.path, el.route);
});

module.exports = router;
