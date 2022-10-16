const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const authorization = req.headers["authorization"];

  if (!authorization)
    return res.status(401).json({
      auth: false,
      message: "Não autorizado"
    });

  const [_, token] = authorization.split(" ");

  if (!token)
    return res.status(401).json({
      auth: false,
      message: "Token inválido"
    });

  const result = jwt.verify(token, String(process.env.JWT_SECRET));

  if (!result)
    return res.status(401).json({
      auth: false,
      message: "Token inválido"
    });

  req.body.usuario = {
    id: Number(result.id || 0),
    email: result.email
  };

  next();
};
