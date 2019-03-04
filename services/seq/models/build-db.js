const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const Sequelize = require('sequelize');


module.exports = function () {
	return config.use_env_variable ?
		new Sequelize(process.env[config.use_env_variable], config) :
		new Sequelize(config.database, config.username, config.password, config);
}
