const {
	GraphQLObjectType
} = require("graphql");

const {
	attributeFields
} = require("graphql-sequelize");

const User = require("./index");

module.exports = function (sequelizeSchema) {
	return new GraphQLObjectType({
		name: "Client",
		description: "Clients infos",
		fields: attributeFields(sequelizeSchema)
	});
};
