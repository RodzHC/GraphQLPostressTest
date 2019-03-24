const { NODE_ENV } = process.env;
const { Signale } = require("signale");
const winston = require("winston");

let level, transports;
switch (NODE_ENV) {
  case "development":
    level = "verbose";
    transports = [new winston.transports.Console()];
    break;
  case "production":
    level = "verbose";
    transports = [
      new winston.transports.File({
        filename: "error.log",
        level: "error"
      }),
      new winston.transports.File({
        filename: "combined.log",
        level: "verbose"
      })
    ];
    break;
}
module.exports.Winton = winston.createLogger({
  level,
  transports
});

module.exports.Signale = () => {
  const options = {
    disabled: false,
    interactive: false,
    logLevel: "info",
    scope: "custom",
    secrets: [],
    stream: process.stdout,
    types: {
      env: {
        badge: "🚀",
        color: "green",
        label: "env",
        logLevel: "info"
      }
    }
  };

  return new Signale(options);
};
