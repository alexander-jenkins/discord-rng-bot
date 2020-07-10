// Set up required configurations and dependencies
'use strict'
require('dotenv').config()
const config = {
    TOKEN: process.env.TOKEN,
    PREFIX: process.env.PREFIX
}
const prefix = config.PREFIX
const Discord = require('discord.js')
const bot = new Discord.Client()

// Gathers all of the commands from the commands handler
const fs = require('fs')
bot.cmds = new Discord.Collection()
const cmdFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for (const file of cmdFiles) {
    const command = require(`./commands/${file}`)
    bot.cmds.set(command.name, command)
}

// Csommands get parsed and executed here
bot.on('message', msg => {
    const args = msg.content.slice(prefix.length).trim().split(/ +/g)
    const cmd = args.shift().toLowerCase()
    if (msg.author.bot) return
    if (msg.content.indexOf(prefix) !== 0) return

    switch (cmd) {
        case 'pick' : {
            bot.cmds.get('pick').execute(msg, args)
            break
        }
        case 'roll' : {
            bot.cmds.get('roll').execute(msg, args)
            break
        }
        case 'flip' : {
            bot.cmds.get('flip').execute(msg, args)
            break
        }
        case 'num' : {
            bot.cmds.get('num').execute(msg, args)
            break
        }
        case 'help' : {
            bot.cmds.get('help').execute(msg)
            break
        }
    }
})

// This is where the bot authenticates with Discord servers using its auth token
bot.on('ready', () => {
    console.log('Connected as user ' + bot.user.tag)
})
bot.login(config.TOKEN) 