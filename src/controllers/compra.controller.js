const repository = require("../infra/repositories/compra.repository");

class CompraController {
  constructor() {}

  async create(request, response) {
    const { body } = request;

    await repository.add(body);

    return response.status(201).send({ created: true });
  }

  async update(request, response) {
    const { body } = request;
    const { id } = request.params;

    const result = await repository.update(id || 0, body);

    if (result) return response.status(201).send({ updated: true });

    return response.status(400).send({ updated: false });
  }

  async delete(request, response) {
    const { id } = request.params;

    const result = await repository.delete(id || 0);

    if (result) return response.status(201).send({ deleted: true });

    return response.status(400).send({ deleted: false });
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

module.exports = new CompraController();
