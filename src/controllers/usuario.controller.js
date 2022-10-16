const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const repository = require("../infra/repositories/usuario.repository");

class UsuarioController {
  constructor() {}

  async create(request, response) {
    const { body } = request;

    const hash = await bcrypt.hashSync(
      body.senha,
      Number(process.env.AUTH_SALT)
    );

    await repository.add({ ...body, senha: hash });

    return response.status(201).send({ created: true });
  }

  async login(request, response) {
    const { email, senha } = request.body;

    const usuario = await repository.getByEmail(email);

    if (!usuario) return response.status(400).send({ token: null });

    if (email !== usuario.email)
      return response.status(400).send({ token: null });

    const senhaValida = await bcrypt.compareSync(senha, usuario.senha);

    if (!senhaValida) return response.status(400).send({ token: null });

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      String(process.env.JWT_SECRET),
      {
        expiresIn: `${Number(process.env.JWT_EXPIRESIN)}s` // segundos
      }
    );

    return response.status(201).send({ token, email });
  }
}

module.exports = new UsuarioController();
