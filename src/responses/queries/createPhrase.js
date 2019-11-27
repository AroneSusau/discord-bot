const query = require("./query")

/**
 * Creates new Phrase.
 * 
 * @param {Object} message object containing new Phrase fields.
 * @returns {String} Outcome message for creating new Phrase.
 */
const createPhrase = async message => {
  const str = `INSERT INTO Phrases VALUES (NULL, '${message.phrase}', '${message.response}', '${message.author}')`
  const res = `New response created: ${message.phrase} -> ${message.response}`
  await query(str)
  return res
}

module.exports = createPhrase