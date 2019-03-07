"use strict";
const Sequelize = require("sequelize");
module.exports = sequelize => {
	const Countrie = sequelize.define(
		"Countrie", {
			id: {
				primaryKey: true,
				type: Sequelize.STRING
			},
			name: {
				type: Sequelize.STRING
			}
		}, {}
	);
	return Countrie;
};
