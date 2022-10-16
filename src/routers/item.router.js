const controller = require("../controllers/item.controller");
const isAuthorized = require("../config/is-authorized");

module.exports = function (app) {
  app.post("/itens", isAuthorized, controller.create);
  app.delete("/itens/:id", isAuthorized, controller.delete);
  app.get("/itens", isAuthorized, controller.all);
  app.get("/itens/:id", isAuthorized, controller.show);
};
