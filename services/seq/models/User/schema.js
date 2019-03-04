const {
	GraphQLObjectType,
	GraphQLSchema
} = require("graphql");
const queries = require("./queries");
const mutations = require("./mutations");
var sequelizeUser = require("./index");
var userType = require("./type");
module.exports = sequelizeConnection => {
	sequelizeUser = sequelizeUser(sequelizeConnection);
	userType = userType(sequelizeUser);
	return new GraphQLSchema({
		query: new GraphQLObjectType({
			name: "RootQuery",
			fields: queries(sequelizeUser, userType)
		}),
		mutation: new GraphQLObjectType({
			name: "RootMutation",
			fields: mutations(sequelizeUser, userType)
		})
	});
};
