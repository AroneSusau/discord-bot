const query = require("./query");

/**
 * Searches db for Phrase message.
 * 
 * @param {String} phrase sent up from discord message.
 * @returns {String} Response message.
 */
const getPhrase = async phrase => {
  const str = `SELECT * FROM Phrases WHERE phrase LIKE '${phrase}'`
  const result = await query(str)
  return result[0].response
}

module.exports = getPhrase