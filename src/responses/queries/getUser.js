const query = require("./query")

const getUser = async username => {
  return await query(`SELECT * FROM users WHERE username LIKE '${username}'`)
}

module.exports = getUser