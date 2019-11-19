const help = _ => {
  return `
  *** Command List ***
  +add "key" "value" - Adds new phrase to list.
  +delete "key" - Deletes phrase / response value from list.
  +list - Lists all phrase / response pairs.
  +mute "username" - Mutes user.
  +unmute "username" - Unmutes user.
  +help - Displays command list.
  `
}

module.exports = help