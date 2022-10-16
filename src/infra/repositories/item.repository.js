const pool = require("../db/dbconnector");

class ItemRepository {
  async all() {
    const client = await pool.connect();
    const sql =
      "SELECT it.*,pr.nome FROM items it INNER JOIN produtos pr ON it.idProduto = pr.id";
    const { rows } = await client.query(sql);

    return rows;
  }

  async getById(id) {
    const client = await pool.connect();
    const sql = "SELECT * FROM items WHERE id = $1";
    const { rows } = await client.query(sql, [parseInt(id || 0)]);

    if (rows && rows.length > 0) return rows[0];

    return null;
  }

  async add(data) {
    const client = await pool.connect();

    const sql = `insert into items (idCompra,idProduto) values($1,$2)`;
    const values = [data.idCompra, data.idProduto];

    await client.query(sql, values);
  }

  async delete(id) {
    const item = await this.getById(id);

    if (!item) return false;

    const client = await pool.connect();

    const sql = `delete from items where id = $1`;
    const values = [id];

    await client.query(sql, values);

    return true;
  }
}

module.exports = new ItemRepository();
