// db.js
const mysql = require('mysql2');

// Setup koneksi database
const pool = mysql.createPool({
  host: 'hopper.proxy.rlwy.net',  // Ganti dengan host DB yang sesuai
  user: 'root',       // Ganti dengan user DB yang sesuai
  password: 'TpjipmvohQviljnxnRghEciPrllfTNYI',       // Ganti dengan password DB yang sesuai
  database: 'kulinerkitav2', // Ganti dengan nama database yang sesuai
  port: 35797
});

module.exports = pool.promise();  // Menyediakan koneksi pool dengan promise
