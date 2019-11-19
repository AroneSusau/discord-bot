const options = require('./db')
const commands = require('./commands')
const parser = require('discord-command-parser')

/**
 * Returns string content in message from discord.
 * 
 * @param {Message} message from discord chat.
 * @returns {String} Text content of message.
 */
const getText = message => {
  return message.content.toLowerCase()
}

/**
 * Checks if message contains Phrase.
 * 
 * @param {Message} message from discord chat.
 * @returns {String} Response Phrase.
 */
const containsPhrase = async message => {
  if (message.content[0] != '+') {
    return await options.getPhrase(getText(message))
  } else return ''
}

/**
 * Reads command input and performs related action.
 * 
 * @param {Message} message from discord chat.
 * @returns {String} Outcome of command action.
 */
const checkCommand = async message => {
  if (message.content[0] == '+') {
    const parsed = parser.parse(message, '+')
    if (parsed.success) {
      switch (parsed.command) {
        case 'add':    return commands.add(parsed, message)
        case 'delete': return commands.delete(parsed)
        case 'mute':   return commands.mute(parsed, message)
        case 'unmute': return commands.unmute(parsed, message)
        case 'list':   return commands.list()
        case 'help':   return commands.help()
        default:       return 'Invalid command, command does not exist.'
      }
    } else return 'Invalid command, invalid syntax.'
  }
}

module.exports = {
  containsPhrase: containsPhrase,
  checkCommand: checkCommand,
}
