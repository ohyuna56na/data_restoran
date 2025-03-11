// db.js
const mysql = require('mysql2');

// Setup koneksi database
const pool = mysql.createPool({
  host: 'shuttle.proxy.rlwy.net',  // Ganti dengan host Railway
  user: 'root',                     // Ganti dengan user Railway
  password: 'OxfpUwiOsETIfOivqxDisumCfYZiWkRE', // Ganti dengan password Railway
  database: 'railway',               // Ganti dengan nama database Railway
  port: 23611,
});

module.exports = pool.promise();  // Menyediakan koneksi pool dengan promise
