const query = require("./query")
const getUser = require("./getUser")
const createUser = require("./createUser")

const setUserMute = async username => {
  const str = `UPDATE users SET isMute=1 WHERE username LIKE '${username}';`
  let user = await getUser(username)
  if (!user.length) createUser(username)
  else query(str)

  return 'Everybody gangsta till the bot comes out.'
}

module.exports = setUserMute