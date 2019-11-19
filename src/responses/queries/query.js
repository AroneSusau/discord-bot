const mariadb = require('mariadb')
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  database: 'options',
  connectionLimit: 50
})

/**
 * Queries databse.
 * 
 * @param {String} query for database.
 */
const query = async query => {
  var conn, result;
  try {
    conn = await pool.getConnection()
    result = await conn.query(query)
  } catch (err) { 
    conn.end()
    throw err 
  } 
  conn.end()
  return result;
}

module.exports = query