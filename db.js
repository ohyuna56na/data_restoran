const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.MYSQLHOST || 'mysql.railway.internal',
  user: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || 'TpjipmvohQviljnxnRghEciPrllfTNYI',
  database: process.env.MYSQLDATABASE || 'kulinerkitav2',
  port: process.env.MYSQLPORT || 3306
});


pool.getConnection((err, connection) => {
  if (err) {
    console.error('❌ Database connection failed:', err);
  } else {
    console.log('✅ Database connected successfully');
    connection.release();
  }
});

module.exports = pool.promise();
