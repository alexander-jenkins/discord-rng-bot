module.exports = {
    name : 'help',
    description: 'Provides a description of all available commands',
    execute(msg) {
        msg.channel.send({embed: {
            title: "Chaos Bot Help",
            fields: [
                {name: '!help', value: 'The syntax of the help command is [ !help ]\nThe bot will then send this message detailing all of the commands that it supports and how to use them.'},
                {name: '!num', value: 'The syntax of the !num command is [ !num <low> <high> ]\nThe bot will then return a random number between the low and high value.'},
                {name: '!roll', value: 'The syntax of the roll command is [ !roll ]\nThe bot will then pick a random number 1 through 6 and react to your message with the number that it picked. This is the equivalent to rolling a 6-sided die.'},
                {name: '!flip', value: 'The syntax of the flip command is [ !flip ]\nThe bot will then flip a coin and reply to your message with heads or tails.'},
                {name: '!pick', value: 'The syntax of the pick command is [ !pick <arg1> <arg2> <arg3> <etc> ]\nYou can supply any number of arguments to this command and the bot will pick randomly from them and reply to the issuer of the command what the choice is.'}
            ]
        }})
    }
}