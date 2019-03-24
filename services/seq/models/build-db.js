const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const Sequelize = require("sequelize");

const path = require("path");
const Signale = require(path.join(__dirname, "../helpers/logger")).Signale();
Signale.env("Using env configurations => " + env);

module.exports = function() {
  console.log();
  return config.use_env_variable
    ? new Sequelize(process.env[config.use_env_variable], config)
    : new Sequelize(config.database, config.username, config.password, {
        freezeTableName: true,
        timestamp: true,
        underscored: true,
        updatedAt: "updated_at",
        createdAt: "created_at",
        ...config
      });
};
