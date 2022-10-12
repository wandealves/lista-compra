const express = require("express");
const consign = require("consign");

module.exports = function () {
  const app = express();

  consign().include("src/routers").into(app);

  return app;
};
