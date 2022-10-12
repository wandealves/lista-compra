const pool = require("../db/dbconnector");

class ProdutoRepository {
  async all() {
    const client = await pool.connect();
    const sql = "SELECT * FROM produtos";
    const { rows } = await client.query(sql);

    return rows;
  }

  async add(data) {
    const client = await pool.connect();

    const sql = `insert into produtos (nome,valor,descricao) values($1,$2,$3)`;
    const values = [data.nome, data.valor, data.descricao];

    await client.query(sql, values);
  }

  /*async add(data: ListaCompra) {
    const client = await pool.connect();

    const sql = `insert into listascompra (name) values($1)`;
    const values = [data.name];

    await client.query(sql, values);
  }

  async update(id: number, data: ListaCompra) {
    const client = await pool.connect();

    const sql = `update listascompra set name = $1 where id = $2`;
    const values = [data.name, id];

    await client.query(sql, values);
  }

  async remove(id: number) {
    const client = await pool.connect();

    const sql = `delete from listascompra where id = $1`;
    const values = [id];

    await client.query(sql, values);
  }*/
}

module.exports = new ProdutoRepository();
