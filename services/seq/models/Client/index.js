"use strict";
const Sequelize = require("sequelize");
module.exports = sequelize => {
	const Client = sequelize.define(
		"Client", {
			id: {
				primaryKey: true,
				type: Sequelize.STRING
			},
			full_name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false
			},
			email_confirmation: {
				type: Sequelize.BOOLEAN,
				defaultValue: false
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false
			},
			password_salt: {
				type: Sequelize.STRING,
				allowNull: false
			},
			status: {
				type: Sequelize.STRING
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false
			},
			is_vendor: {
				type: Sequelize.BOOLEAN,
				defaultValue: false
			}
		}, {}
	);
	Client.associate = function (models) {
		// associations can be defined here
	};
	return Client;
};
