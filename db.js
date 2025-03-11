// db.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'hopper.proxy.rlwy.net',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'TpjipmvohQviljnxnRghEciPrllfTNYI',
  database: process.env.DB_NAME || 'kulinerkitav2',
  port: process.env.DB_PORT || 35797
});

module.exports = pool.promise();

