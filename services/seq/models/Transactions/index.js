"use strict";
const Sequelize = require("sequelize");
module.exports = sequelize => {
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
