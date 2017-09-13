var winston = require("winston");

winston.emitErrs = false;

function formatter(args) {
    var dateTimeComponent = new Date();
    var logMessage = dateTimeComponent + ' - ' + args.level + ': ' + (args.message ? args.message : '');
    return logMessage;
}
var logger = new(winston.Logger)({
    transports: [
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            humanReadableUnhandledException: true,
            json: false,
            formatter: formatter,
            colorize: true

        }),
        new winston.transports.File({
            level: 'debug',
            filename: 'logs/mySample.log',
            handleExceptions: true,
            humanReadableUnhandledException: true,
            json: true,
            formatter: formatter,
            maxsize: 5242880,
            maxFiles: 5

        })
    ],
    exitOnError: false
});

module.exports = logger;

module.exports.stream = {
    write: function(message, encoding) {
        logger.info(message);
    }
};