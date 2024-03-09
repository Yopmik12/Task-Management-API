const express = require("express");

const router = express.Route();

const DefaultRoutes = [];

DefaultRoutes.forEach((el) => {
  router.use(el.path, el.route);
});

module.exports = router;
