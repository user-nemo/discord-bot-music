const logger = require('./src/log/log.js');
const config = require('./conf/config.json');
const discord = require('discord.js');

let client = new discord.Client();
client.login(config.token);

client.on('message', () => {
    logger.info('This is a message');
});