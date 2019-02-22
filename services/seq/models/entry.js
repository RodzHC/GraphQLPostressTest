const bodyParser = require('body-parser');
const {
	graphqlExpress,
	graphiqlExpress
} = require('apollo-server-express');
const logger = require('../helpers/logger');
var {
	NODE_ENV
} = process.env;
console.log(NODE_ENV);
if (!NODE_ENV) {
	NODE_ENV = 'development';
}
module.exports = function (app) {
	const schema = require('./User/schema');
	app.use('/graphql', bodyParser.json(), (req, res, next) =>
		graphqlExpress({
			schema,
			context: {
				user: req.user
			}
		})(req, res, next)
	);
	if (NODE_ENV === 'development') {
		app.get('/graphiql', graphiqlExpress({
			endpointURL: '/graphql'
		}));
	}
	logger.info(`Running a GraphQL API server at /graphql`);
}
