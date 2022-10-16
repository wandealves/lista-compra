const controller = require("../controllers/compra.controller");

module.exports = function (app) {
  app.post("/compras", controller.create);
  app.put("/compras/:id", controller.update);
  app.delete("/compras/:id", controller.delete);
  app.get("/compras", controller.all);
  app.get("/compras/:id", controller.show);
};
