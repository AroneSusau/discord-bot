const query = require("./query")

const setUserUnmute = async username => {
  const str = `UPDATE users SET isMute=0 WHERE username LIKE '${username}';`
  query(str)

  return `${username} has been unmuted.`
}

module.exports = setUserUnmute