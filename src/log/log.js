const winston = require('winston');
const LOGGER = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    defaultMeta: {
        service: 'user-service'
    },
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            filename: './logs/app.log'
        })
    ],
  });

module.exports = LOGGER;