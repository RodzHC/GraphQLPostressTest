const sequelizeConnection = require("./build-db")();
const bodyParser = require("body-parser");
const {
	ApolloServer,
	gql
} = require("apollo-server-express");
const logger = require("../helpers/logger");
var {
	NODE_ENV
} = process.env;
if (!NODE_ENV) {
	NODE_ENV = "development";
}
const schema = require("./User/schema")(sequelizeConnection);

module.exports = function (app) {
	const server = new ApolloServer({
		schema
	});
	server.applyMiddleware({
		app
	});
	app.listen({
			port: 4000
		}, () =>
		console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
	)
}
