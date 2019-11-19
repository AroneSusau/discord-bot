const query = require("./query")

/**
 * Gets all Phrase.
 * 
 * @returns {String} Outcome message for getting all Phrase.
 */
const getAllPhrases = async _ => {
  const result = await query('SELECT * FROM Phrases;')
  const empty = 'Phrase List Empty.'
  if (result.length > 0) {
    return await result.reduce((prev, curr, i) => {
      return prev + `${i + 1}. ${curr.phrase} -> ${curr.response}\n`
    }, '\n')
  } else return empty
}

module.exports = getAllPhrases