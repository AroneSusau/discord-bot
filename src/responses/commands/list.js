const db = require('./../db')

const list = async _ => {
  return await db.getAllPhrases()
}

module.exports = list