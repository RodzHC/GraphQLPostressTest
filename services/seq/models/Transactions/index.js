"use strict";
module.exports = (sequelize, Sequelize) => {
	const Transaction = sequelize.define(
		"Transaction", {
			id: {
				primaryKey: true,
				type: Sequelize.STRING
			},
			status: {
				type: Sequelize.STRING
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false
			},
		}, {}
	);
	return Transaction;
};
