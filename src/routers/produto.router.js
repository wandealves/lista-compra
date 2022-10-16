const controller = require("../controllers/produto.controller");
const isAuthorized = require("../config/is-authorized");

module.exports = function (app) {
  app.post("/produtos", isAuthorized, controller.create);
  app.put("/produtos/:id", isAuthorized, controller.update);
  app.delete("/produtos/:id", isAuthorized, controller.delete);
  app.get("/produtos", isAuthorized, controller.all);
  app.get("/produtos/:id", isAuthorized, controller.show);
};
