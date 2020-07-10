module.exports = {
    name: 'num',
    description: 'Generates a random number between the 2 given arguments',
    execute(msg, args) {
        var numFloor = parseInt(args[0])
        var numCeil = parseInt(args[1])
        var randNum = (Math.floor(Math.random() * numCeil) + numFloor)
        msg.reply('Your number is ' + randNum)
    }
}