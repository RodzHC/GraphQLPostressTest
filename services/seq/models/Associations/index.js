"use strict";
const Sequelize = require("sequelize");
module.exports = sequelize => {
	const Association = sequelize.define();
	return Association;
};
