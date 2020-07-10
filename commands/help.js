const { description } = require("./num");

module.exports = {
    name : 'help',
    description: 'Provides a description of all available commands',
    execute(msg) {
        console.log('help command was called -- add info to be displayed')
    }
}