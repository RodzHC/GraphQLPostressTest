const {
	GraphQLObjectType,
	GraphQLSchema,
} = require('graphql');
const queries = require('./queries');
const mutations = require('./mutations');
var User = require('./index');
module.exports = function (...args) {
	User = User(...args);
	return new GraphQLSchema({
		query: new GraphQLObjectType({
			name: 'RootQuery',
			fields: queries(User, ...args)
		}),
		mutation: new GraphQLObjectType({
			name: 'RootMutation',
			fields: mutations(User, ...args)
		})
	});

}
