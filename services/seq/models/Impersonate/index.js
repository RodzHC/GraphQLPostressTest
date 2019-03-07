"use strict";
const Sequelize = require("sequelize");
module.exports = sequelize => {
	const Impersonate = sequelize.define(
		"Impersonate", {
			id: {
				primaryKey: true,
				type: Sequelize.STRING
			},
			user_id: {
				type: Sequelize.STRING
			},
			merchant_id: {
				type: Sequelize.DECIMAL(13, 2)
			},
			merchant_status: {
				type: Sequelize.STRING
			}
		}, {}
	);
	return Impersonate;
};
