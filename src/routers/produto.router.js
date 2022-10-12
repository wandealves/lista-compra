const controller = require("../controllers/produto.controller");

module.exports = function (app) {
  app.post("/produtos", controller.create);
  app.get("/produtos", controller.all);
};
