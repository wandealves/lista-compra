class ProdutoController {
  constructor() {}

  all(request, response) {
    response.json([{ name: "produto 01" }, { name: "produto 02" }]);
  }
}

module.exports = new ProdutoController();
