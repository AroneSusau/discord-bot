const db = require('./../db')

const mute = async (parsed, input) => {
  const inputName = parsed.arguments[0]
  const members = Array.from(input.channel.guild.members)
  const memberCount = input.channel.guild.memberCount - 1
  let result;

  for (let i = 0; i < memberCount; i++) {
    const user = members[i][1]
    const serverName = user.nickname != null ? user.nickname : user.user.username

    if (serverName == inputName) {
      user.setMute(true)
      .catch(e => console.log(e.name + ": " + e.message))
      result = await db.setUserMute(serverName)
    }
  }

  //console.log(result)
  return result
}

module.exports = mute