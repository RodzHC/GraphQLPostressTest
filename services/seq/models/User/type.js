const {
	GraphQLObjectType,
} = require('graphql');

const {
	attributeFields
} = require('graphql-sequelize');
const sequelize = require("../build-db")();
const Sequelize = require('sequelize');
const
	User = require('./index')(sequelize, Sequelize);
module.exports = new GraphQLObjectType({
	name: 'User',
	description: 'Users infos',
	fields: attributeFields(User)
});
