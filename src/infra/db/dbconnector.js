const { Pool } = require("pg");

const pool = new Pool({
  max: 20,
  connectionString: process.env.CONNECTIONSTRING,
  idleTimeoutMillis: 30000
});

module.exports = pool;
