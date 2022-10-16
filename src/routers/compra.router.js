const controller = require("../controllers/compra.controller");
const isAuthorized = require("../config/is-authorized");

module.exports = function (app) {
  app.post("/compras", isAuthorized, controller.create);
  app.put("/compras/:id", isAuthorized, controller.update);
  app.delete("/compras/:id", isAuthorized, controller.delete);
  app.get("/compras", isAuthorized, controller.all);
  app.get("/compras/:id", isAuthorized, controller.show);
};
