const controller = require("../controllers/usuario.controller");

module.exports = function (app) {
  app.post("/usuarios", controller.create);
  app.post("/usuarios/login", controller.login);
};
