const db = require('./../db')

const remove = async parsed => {
  return await db.deletePhrase(parsed.arguments[0])
}

module.exports = remove