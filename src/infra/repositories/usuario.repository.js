const pool = require("../db/dbconnector");

class UsuarioRepository {
  async all() {
    const client = await pool.connect();
    try {
      const sql = "SELECT * FROM compras";
      const { rows } = await client.query(sql);

      return rows;
    } finally {
      client.release();
    }
  }

  async getByEmail(email) {
    const client = await pool.connect();
    try {
      const sql = "SELECT * FROM usuarios WHERE email = $1";
      const { rows } = await client.query(sql, [email]);

      if (rows && rows.length > 0) return rows[0];

      return null;
    } finally {
      client.release();
    }
  }

  async add(data) {
    const client = await pool.connect();
    try {
      const sql = `insert into usuarios (nome,email,senha) values($1,$2,$3)`;
      const values = [data.nome, data.email, data.senha];

      await client.query(sql, values);
    } finally {
      client.release();
    }
  }
}

module.exports = new UsuarioRepository();
