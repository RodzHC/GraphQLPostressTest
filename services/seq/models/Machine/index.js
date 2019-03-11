"use strict";
module.exports = (sequelize, Sequelize) => {
	const Machine = sequelize.define(
		"Machine", {
			id: {
				primaryKey: true,
				type: Sequelize.STRING
			},
			seria_number: {
				type: Sequelize.STRING
			},
			price: {
				type: Sequelize.DECIMAL(13, 2)
			},
			status: {
				type: Sequelize.STRING
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false
			}
		}, {}
	);
	return Machine;
};
