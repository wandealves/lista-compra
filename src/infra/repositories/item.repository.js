const pool = require("../db/dbconnector");

class ItemRepository {
  async all() {
    const client = await pool.connect();
    try {
      const sql =
        "SELECT it.*,pr.nome FROM items it INNER JOIN produtos pr ON it.idProduto = pr.id";
      const { rows } = await client.query(sql);

      return rows;
    } finally {
      client.release();
    }
  }

  async getByCompra(id) {
    const client = await pool.connect();
    try {
      const sql =
        "SELECT it.*,pr.nome FROM items it INNER JOIN produtos pr ON it.idProduto = pr.id WHERE it.idCompra = $1";
      const { rows } = await client.query(sql, [parseInt(id || 0)]);

      return rows;
    } finally {
      client.release();
    }
  }

  async getById(id) {
    const client = await pool.connect();
    try {
      const sql =
        "SELECT it.*,pr.nome FROM items it INNER JOIN produtos pr ON it.idProduto = pr.id WHERE it.id = $1";
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
      const sql = `insert into items (idCompra,idProduto) values($1,$2)`;
      const values = [data.idCompra, data.idProduto];

      await client.query(sql, values);
    } finally {
      client.release();
    }
  }

  async delete(id) {
    const item = await this.getById(id);

    if (!item) return false;

    const client = await pool.connect();

    try {
      const sql = `delete from items where id = $1`;
      const values = [id];

      await client.query(sql, values);

      return true;
    } finally {
      client.release();
    }
  }
}

module.exports = new ItemRepository();
