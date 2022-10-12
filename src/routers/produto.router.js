module.exports = function (app) {
  app.get("/produtos", function (request, response) {
    console.log("Recebida requisição de teste.");

    response.send("Ok, Produtos");
  });
};
