const controller = require("../controllers/produto.controller");

module.exports = function (app) {
  app.post("/produtos", controller.create);
  app.put("/produtos/:id", controller.update);
  app.delete("/produtos/:id", controller.delete);
  app.get("/produtos", controller.all);
  app.get("/produtos/:id", controller.show);
};
