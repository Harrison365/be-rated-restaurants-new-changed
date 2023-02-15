const { Pool } = require("pg");

if (!process.env.PGDATABASE) {
  throw new Error("NO PGDATABASE SET...");
}

module.exports = new Pool();
