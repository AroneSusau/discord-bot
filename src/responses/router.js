const _ = require('./interpreter')
const db = require("./db")

const execute = async (fn, input, ttsCheck) => {
  const result = await fn(input)
  if (result) input.reply(result, {tts: ttsCheck})
}

const router = {
  reply: input => {
    if (!input.author.bot) {
      execute(_.containsPhrase, input, true)
      execute(_.checkCommand, input, false)
    }
  },

  voiceControl: async user => {
    if (!user.bot) {
      const members = Array.from(user.guild.members)
      const memberCount = user.guild.memberCount - 1
  
      for (let i = 0; i < memberCount; i++) {
        const member = members[i][1]
        const voiceConnected = member.voiceSessionID != undefined && member.voiceChannelID != undefined
        
        if (voiceConnected && !member.serverMute) {
          const serverName = member.nickname != null ? member.nickname : member.user.username
          const isMute = Array.from(await db.getUser(serverName))[0].isMute

          if (isMute) {
            await member.setMute(true).catch(e => console.log(e.name + ": " + e.message))
          }
        }
      }
    }
  }
}

module.exports = router
