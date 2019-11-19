const db = require('./../db')

const add = async (parsed, input) => {
  return await db.createPhrase({
    phrase: parsed.arguments[0],
    response: parsed.arguments[1],
    author: input.author
  })
}

module.exports = add