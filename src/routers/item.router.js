const controller = require("../controllers/item.controller");

module.exports = function (app) {
  app.post("/itens", controller.create);
  app.delete("/itens/:id", controller.delete);
  app.get("/itens", controller.all);
  app.get("/itens/:id", controller.show);
};
