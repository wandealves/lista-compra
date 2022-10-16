const pool = require("../db/dbconnector");

class UsuarioRepository {
  async all() {
    const client = await pool.connect();
    const sql = "SELECT * FROM compras";
    const { rows } = await client.query(sql);

    return rows;
  }

  async getByEmail(email) {
    const client = await pool.connect();
    const sql = "SELECT * FROM usuarios WHERE email = $1";
    const { rows } = await client.query(sql, [email]);

    if (rows && rows.length > 0) return rows[0];

    return null;
  }

  async add(data) {
    const client = await pool.connect();

    const sql = `insert into usuarios (nome,email,senha) values($1,$2,$3)`;
    const values = [data.nome, data.email, data.senha];

    await client.query(sql, values);
  }
}

module.exports = new UsuarioRepository();
