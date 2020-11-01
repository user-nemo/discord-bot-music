const logger = require('./src/log/log.js');
const config = require('./conf/config.json');
const discord = require('discord.js');

const handle = require('./src/handle/handle.js');

let client = new discord.Client();
client.login(config.token);

let messageHandler = new handle.Handler({
    'dummy': new handle.MessageHandle(function() {console.log('yey');}, 'first test')
});

client.on('message', (message) => {
    return Promise.resolve(message).then(function(message) {
        if (validateMessage(message)) {
            logger.info(message.content, {service: 'main'});
            
            let command = message.content.replace(new RegExp('^' + config.prefix + '\\W*'), '');
            messageHandler.handle(command, message);
            
            //message.channel.send('Alright')
        }
    });
});

function validateMessage(message) {
    let valid = true;

    valid = valid && !message.author.bot;

    let id = message.content.split(/\W+/).shift();

    valid = valid && id == config.prefix

    return valid;
}