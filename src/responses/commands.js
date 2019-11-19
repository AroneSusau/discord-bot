const add = require("./commands/add")
const remove = require("./commands/delete")
const mute = require("./commands/mute")
const unmute = require("./commands/unmute")
const list = require("./commands/list")
const help = require("./commands/help")
const checkArguments = require("./commands/checkArguments")

module.exports = {
  add: (parsed, input) => checkArguments(add, 2, parsed, input),
  delete: (parsed, input) => checkArguments(remove, 1, parsed, input),
  mute: (parsed, input) => checkArguments(mute, 1, parsed, input),
  unmute: (parsed, input) => checkArguments(unmute, 1, parsed, input),
  list: list,
  help: help
}
