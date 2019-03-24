const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

var sequelize = config.use_env_variable ?
	new Sequelize(process.env[config.use_env_variable], config) :
	new Sequelize(config.database, config.username, config.password, config);
console.log(`Trying to connect to ${env} ENV`)
sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	});
