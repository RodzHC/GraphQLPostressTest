"use strict";
const Sequelize = require("sequelize");
module.exports = sequelize => {
  console.log(typeof sequelize.define);
  console.log("Index aqui !");
  const User = sequelize.define(
    "User",
    {
      user_id: {
        primaryKey: true,
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
