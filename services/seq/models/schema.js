const { printType } = require("graphql");
const { makeExecutableSchema } = require("graphql-tools");
const { DateType } = require("graphql-sequelize");

const { graphqlLoader } = require("../helpers/loaders");

module.exports = sequelizeConnection => {
  const obj = graphqlLoader(sequelizeConnection, __dirname);
  return makeExecutableSchema({
    typeDefs: [printType(DateType.default), ...obj.typeDefs],
    resolvers: obj.resolvers
  });
};
