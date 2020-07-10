module.exports = {
    name: 'pick',
    description: 'Picks randomly from an array of supplied string arguments',
    execute(msg, args) {
        var pickCeil = args.length
        var choice = (Math.floor(Math.random() * pickCeil))
        msg.channel.send("I have chosen " + args[choice])
    }
}