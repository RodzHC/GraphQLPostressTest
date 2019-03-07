"use strict";
const Sequelize = require("sequelize");
module.exports = sequelize => {
	const City = sequelize.define(
		"City", {
			code: {
				primaryKey: true,
				type: Sequelize.STRING
			},
			name: {
				type: Sequelize.STRING
			},
			country_code: {
				type: Sequelize.INTEGER
			}
		}, {}
	);
	return City;
};
