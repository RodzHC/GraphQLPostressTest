'use strict';
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		user_id: {
			primaryKey: true,
			type: DataTypes.STRING,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {});
	User.associate = function (models) {
		// associations can be defined here
	};
	return User;
};