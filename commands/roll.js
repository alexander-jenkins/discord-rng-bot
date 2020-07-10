module.exports = {
    name: 'roll',
    description: 'Rolls a six sided die',
    execute(msg, args) {
        var x = (Math.floor(Math.random() * 6) + 1)
        if (x == 1) return msg.react('1️⃣')
        else if (x == 2) return msg.react('2️⃣')
        else if (x == 3) return msg.react('3️⃣')
        else if (x == 4) return msg.react('4️⃣')
        else if (x == 5) return msg.react('5️⃣')
        else if (x == 6) return msg.react('6️⃣')
    }
}