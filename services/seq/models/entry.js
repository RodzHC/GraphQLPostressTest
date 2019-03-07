const sequelizeConnection = require("./build-db")();
const bodyParser = require("body-parser");
const {
	ApolloServer,
	gql
} = require("apollo-server-express");
// const logger = require("../helpers/logger");

// const schema = require("../helpers/sequelizeLoader")(sequelizeConnection);

// const schema = require('./decorate-db')(sequelizeConnection).sequelize;
const schema = require('./Client/schema')(sequelizeConnection);
module.exports = function (app) {
	console.log(schema);
	const server = new ApolloServer({
		schema
	});
	console.log(server);
	server.applyMiddleware({
		app
	});
	app.listen({
			port: 4000
		}, () =>
		console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
	)
}
