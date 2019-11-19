const tryCatch = require("./queries/tryCatch")
const getPhrase = require("./queries/getPhrase")
const createPhrase = require("./queries/createPhrase")
const deletePhrase = require("./queries/deletePhrase")
const getAllPhrases = require("./queries/getAllPhrases")
const setUserMute = require("./queries/setUserMute")
const setUserUnmute = require("./queries/setUserUnmute")
const getUser = require("./queries/getUser")

module.exports = {
  getPhrase:    phrase => tryCatch(getPhrase, [phrase], ''),
  createPhrase: message => tryCatch(createPhrase, [message]),
  deletePhrase: phrase => tryCatch(deletePhrase, [phrase]),
  getAllPhrases: _ => tryCatch(getAllPhrases, []),
  setUserMute: username => tryCatch(setUserMute, [username]),
  setUserUnmute: username => tryCatch(setUserUnmute, [username]),
  getUser: username => tryCatch(getUser, [username]),
}
