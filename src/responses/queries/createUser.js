const query = require("./query")

const createUser = async username => {
  return await query(`INSERT INTO users VALUE (null, '${username}', 1)`)
}

module.exports = createUser