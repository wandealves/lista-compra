const pool = require("../db/dbconnector");

class ProdutoRepository {
  async all() {
    const client = await pool.connect();
    try {
      const sql = "SELECT * FROM produtos";
      const { rows } = await client.query(sql);

      return rows;
    } finally {
      client.release();
    }
  }

  async getById(id) {
    const client = await pool.connect();
    try {
      const sql = "SELECT * FROM produtos WHERE id = $1";
      const { rows } = await client.query(sql, [parseInt(id || 0)]);

      if (rows && rows.length > 0) return rows[0];

      return null;
    } finally {
      client.release();
    }
  }

  async add(data) {
    const client = await pool.connect();
    try {
      const sql = `insert into produtos (nome,valor,descricao) values($1,$2,$3)`;
      const values = [data.nome, data.valor, data.descricao];

      await client.query(sql, values);
    } finally {
      client.release();
    }
  }

  async update(id, data) {
    const produto = await this.getById(id);

    if (!produto) return false;

    const client = await pool.connect();

    try {
      const sql = `update produtos set nome = $1,valor = $2, descricao = $3 where id = $4`;
      const values = [data.nome, data.valor, data.descricao, id];

      await client.query(sql, values);

      return true;
    } finally {
      client.release();
    }
  }

  async delete(id) {
    const produto = await this.getById(id);

    if (!produto) return false;

    const client = await pool.connect();

    try {
      const sql = `delete from produtos where id = $1`;
      const values = [id];

      await client.query(sql, values);

      return true;
    } finally {
      client.release();
    }
  }
}

module.exports = new ProdutoRepository();
