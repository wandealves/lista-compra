const controller = require("../controllers/produto.controller");

module.exports = function (app) {
  app.get("/produtos", controller.all);
};
