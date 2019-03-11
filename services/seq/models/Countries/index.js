"use strict";
module.exports = (sequelize, Sequelize) => {
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
