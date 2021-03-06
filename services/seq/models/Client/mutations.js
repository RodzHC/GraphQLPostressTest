const { GraphQLNonNull, GraphQLString } = require("graphql");
const { resolver } = require("graphql-sequelize");

module.exports = ({ Client }) => {
  return {
    createUser: {
      type: Client,
      args: {
        name: {
          description: "Unique username",
          type: new GraphQLNonNull(GraphQLString)
        },
        password: {
          description: "Password",
          type: new GraphQLNonNull(GraphQLString)
        }
      }
    }
  };
};
