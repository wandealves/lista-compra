require("dotenv").config();

const app = require("./config/adpter-express")();

app.listen(Number(process.env.PORT || 3000), function () {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
