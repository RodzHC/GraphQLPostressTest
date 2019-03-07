"use strict";
const Sequelize = require("sequelize");
module.exports = sequelize => {
	const Customer = sequelize.define(
		"Customer", {
			id: {
				primaryKey: true,
				type: Sequelize.STRING
			},
			cpf: {
				type: Sequelize.STRING,
				allowNull: false,
				validate: {
					isUUID: 11
				}

			},
			gender: {
				type: Sequelize.ENUM('M', 'F')
			},
			date_of_birth: {
				type: Sequelize.DATEONLY
			}
		}, {}
	);
	return Customer;
};
