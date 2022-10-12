const express = require("express");
const consign = require("consign");
const cors = require("cors");

module.exports = function () {
  const app = express();
  app.use(cors());
  app.use(express.json());

  consign().include("src/routers").into(app);

  return app;
};
