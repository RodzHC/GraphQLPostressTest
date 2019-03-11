"use strict";
module.exports = (sequelize, Sequelize) => {
	const Merchant = sequelize.define(
		"Merchant", {
			id: {
				primaryKey: true,
				type: Sequelize.STRING
			},
			admin_id: {
				type: Sequelize.STRING
			},
			merchant_name: {
				type: Sequelize.DECIMAL(13, 2)
			},
			merchant_status: {
				type: Sequelize.STRING
			}
		}, {}
	);
	return Merchant;
};
