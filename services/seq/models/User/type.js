const {
	GraphQLObjectType,
} = require('graphql');

const {
	attributeFields
} = require('graphql-sequelize');

const
	User = require('./index');

module.exports = function (...args) {
	return new GraphQLObjectType({
		name: 'User',
		description: 'Users infos',
		fields: attributeFields(User(...args))
	});
}
