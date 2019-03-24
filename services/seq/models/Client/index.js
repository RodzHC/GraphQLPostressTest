"use strict";
module.exports = (sequelize, Sequelize) => {
  const Client = sequelize.define(
    "client",
    {
      id: {
        primaryKey: true,
        type: Sequelize.STRING
      },
      full_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email_confirmation: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password_salt: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING
      },
      is_vendor: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    },
    {
      freezeTableName: true,
      timestamp: true,
      underscored: true,
      updatedAt: "updated_at",
      createdAt: "created_at"
    }
  );
  Client.associate = function(models) {
    // associations can be defined here
  };
  return Client;
};
