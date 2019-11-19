const query = require("./query")
const getPhrase = require("./getPhrase")

/**
 * Deletes Phrase.
 * 
 * @param {String} phrase sent up from discord message.
 * @returns {String} Outcome message for deleting Phrase.
 */
const deletePhrase = async phrase => {
  const result = await getPhrase(phrase)
  const str = `DELETE FROM Phrases WHERE phrase LIKE '${phrase}'`
  const res = `Phrase Deleted: ${phrase} -> ${result}`
  const bad = 'Bad response: Phrase does not exist.'
  if (result) {
    await query(str)
    return res
  } else return bad
}

module.exports = deletePhrase