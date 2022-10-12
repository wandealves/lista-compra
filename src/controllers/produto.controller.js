const repository = require("../infra/repositories/produto.repository");

class ProdutoController {
  constructor() {}

  async create(request, response) {
    const { body } = request;

    await repository.add(body);

    return response.status(201).send({ created: true });
  }

  async all(request, response) {
    const produtos = await repository.all();
    return response.status(200).send(produtos);
  }
}

module.exports = new ProdutoController();
