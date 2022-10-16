const pool = require("../db/dbconnector");

class CompraRepository {
  async all() {
    const client = await pool.connect();
    const sql = "SELECT * FROM compras";
    const { rows } = await client.query(sql);

    return rows;
  }

  async getById(id) {
    const client = await pool.connect();
    const sql = "SELECT * FROM compras WHERE id = $1";
    const { rows } = await client.query(sql, [parseInt(id || 0)]);

    if (rows && rows.length > 0) return rows[0];

    return null;
  }

  async add(data) {
    const client = await pool.connect();

    const sql = `insert into compras (nome,total,idUsuario) values($1,$2,$3)`;
    const values = [data.nome, 0, data.idUsuario];

    await client.query(sql, values);
  }

  async update(id, data) {
    const compra = await this.getById(id);

    if (!compra) return false;

    const client = await pool.connect();

    const sql = `update compras set nome = $1 where id = $2`;
    const values = [data.nome, id];

    await client.query(sql, values);

    return true;
  }

  async delete(id) {
    const compra = await this.getById(id);

    if (!compra) return false;

    const client = await pool.connect();

    const sql = `delete from compras where id = $1`;
    const values = [id];

    await client.query(sql, values);

    return true;
  }
}

module.exports = new CompraRepository();
