module.exports = {
    name: 'flip',
    description: 'Flips a coin!',
    execute(msg, args) {
        if (Math.random() > .5) return msg.reply("Heads!")
        else return msg.reply("Tails!")
    }
}