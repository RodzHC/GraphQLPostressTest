const {
	makeExecutableSchema
} = require('graphql-tools');
const {
	GraphQLObjectType,
	GraphQLSchema
} = require("graphql");

// const queries = require("./Client/queries");
// const mutations = require("./Client/mutations");
// var sequelizeUser = require("./Client/index");
// var userType = require("./Client/types");

const {
	graphqlLoader
} = require('../helpers/loaders');


module.exports = sequelizeConnection => {


	const obj = graphqlLoader(sequelizeConnection, __dirname);
	return new GraphQLSchema({
		query: new GraphQLObjectType({
			name: "RootQuery",
			fields: obj.queries
		}),
		mutation: new GraphQLObjectType({
			name: "RootMutation",
			fields: obj.mutations
		})
	});
};
