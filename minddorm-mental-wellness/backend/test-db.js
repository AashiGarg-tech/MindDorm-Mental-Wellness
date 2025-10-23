// const pool = require('./db'); // adjust path if db.js is inside /config
const pool = require('./config/db');
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('❌ Connection failed:', err);
  } else {
    console.log('✅ Connected to PostgreSQL:', res.rows[0]);
  }
});