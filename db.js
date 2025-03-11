// db.js
const mysql = require('mysql2/promise');

async function testConnection() {
  const pool = mysql.createPool({
    host: 'shuttle.proxy.rlwy.net',
    user: 'root',
    password: 'OxfpUwiOsETIfOivqxDisumCfYZiWkRE',
    database: 'railway',
    port: 3306,
  });

  try {
    const connection = await pool.getConnection();
    console.log('Database connected successfully!');
    connection.release();
  } catch (err) {
    console.error('Database connection error:', err.message);
  }
}

testConnection();
