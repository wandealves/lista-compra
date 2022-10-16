const repository = require("../infra/repositories/usuario.repository");

class LoginController {
  constructor() {}

  async create(request, response) {
    const { body } = request;

    await repository.add(body);

    return response.status(201).send({ created: true });
  }

  async all(request, response) {
    const compras = await repository.all();
    return response.status(200).send(compras);
  }

  async show(request, response) {
    const { id } = request.params;
    const compra = await repository.getById(id);
    return response.status(200).send(compra);
  }
}

module.exports = new LoginController();
