const sequelizeConnection = require("./build-db")();
const bodyParser = require("body-parser");
const { ApolloServer, gql } = require("apollo-server-express");
const logger = require("../helpers/logger");
var { NODE_ENV } = process.env;
if (!NODE_ENV) {
  NODE_ENV = "development";
}
const userSchema = require("./User/schema")(sequelizeConnection);

module.exports = function(app) {
  const server = new ApolloServer({typeDefs: ,
  resolvers:});
  //   app.use("/graphql", bodyParser.json(), (req, res, next) =>
  //     graphqlExpress({
  //       userSchema,
  //       context: {
  //         user: req.user
  //       }
  //     })(req, res, next)
  //   );
  //   if (NODE_ENV === "development") {
  //     app.get(
  //       "/graphiql",
  //       graphiqlExpress({
  //         endpointURL: "/graphql"
  //       })
  //     );
  //   }
  //   logger.info(`Running a GraphQL API server at /graphql`);
};
