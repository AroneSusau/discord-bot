'use strict'

const Discord = require('discord.js')
const router = require('./responses/router.js')
const auth = {token: `${process.env.BOTKEY}`}
const client = new Discord.Client()

client.login(auth.token)
client.on('ready', _ => console.log('Logged In!\n'))
client.on('message', router.reply)
client.on('voiceStateUpdate', router.voiceControl)
