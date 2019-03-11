"use strict";
module.exports = (sequelize, Sequelize) => {
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
