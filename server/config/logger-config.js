const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, prettyPrint } = format;

const timezoned = () => {
  return new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata'
  });
}

const logger = createLogger({
  format: combine(timestamp({ format: timezoned }), prettyPrint()),
  transports: [new transports.File({ filename: "error.log"})],
});

module.exports = logger;
