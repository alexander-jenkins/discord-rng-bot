'use strict'
// Import config file
require('dotenv').config()
const fs = require('fs')
const config = {
    TOKEN: process.env.TOKEN,
    OWNER: process.env.OWNER,
    PREFIX: process.env.PREFIX
}
const prefix = config.PREFIX
// Create an instance of the Bot
const Discord = require('discord.js')
const bot = new Discord.Client()
// This fires as soon as the bot goes online
bot.on('ready', () => {
    console.log("Logged in as user " + bot.user.tag)
})
// This fires when the bot see's a new message
bot.on('message', msg => {
    // Slice commands into the command and args using whitespace as the delimiter
    const args = msg.content.slice(prefix.length).trim().split(/ +/g)
    const cmd = args.shift().toLowerCase()
    if (msg.author.bot) return
    if (msg.content.indexOf(prefix) !== 0) return
    // Create the commands
    switch (cmd) {
        case 'ping' : {
            msg.channel.send('pong!')
            break
        }
        case 'avatar' : {
            msg.reply("your avatar can be found here: " + msg.author.displayAvatarURL())
            break
        }
        // random number between x and y
        case 'num' : {
            var numFloor = parseInt(args[0])
            var numCeil = parseInt(args[1])
            var randNum = (Math.floor(Math.random() * numCeil) + numFloor)
            msg.channel.send('Your number is: ' + randNum)
            break
        }
        // flip a coin
        case 'flip' : {
            if (Math.random() > .5) return msg.channel.send("Heads!")
            else return msg.reply("Tails!")
            break
        }
        // roll a dice
        case 'roll' : {
            var x = (Math.floor(Math.random() * 6) + 1)
            if (x == 1) return msg.react('1️⃣')
            else if (x == 2) return msg.react('2️⃣')
            else if (x == 3) return msg.react('3️⃣')
            else if (x == 4) return msg.react('4️⃣')
            else if (x == 5) return msg.react('5️⃣')
            else if (x == 6) return msg.react('6️⃣')
            break
        }
        // pick from a list of given arguments
        case 'pick' : {
            var pickCeil = args.length
            var choice = (Math.floor(Math.random() * pickCeil))
            msg.channel.send("I have chosen " + args[choice])
        }
    }
})
// log into Discord
bot.login(config.TOKEN)