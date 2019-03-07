"use strict";
const Sequelize = require("sequelize");
module.exports = sequelize => {
	const Company = sequelize.define(
		"Company", {
			id: {
				primaryKey: true,
				type: Sequelize.STRING
			},
			cnpj: {
				type: Sequelize.INTEGER,
				allowNull: false,
				validate: {
					isUUID: 14
				}
			},
			category: {
				type: Sequelize.ENUM('someCategory', 'anotherCategory')
			}
		}, {}
	);
	return Company;
};
