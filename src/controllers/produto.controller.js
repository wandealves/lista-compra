const repository = require("../infra/repositories/produto.repository");

class ProdutoController {
  constructor() {}

  post(request, response) {
    const { body } = request;

    return response.status(201).send("Something broke!");
  }

  async all(request, response) {
    const produtos = await repository.all();
    return response.status(200).send(produtos);
  }
}

module.exports = new ProdutoController();
