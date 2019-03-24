const { GraphQLNonNull, GraphQLString, GraphQLList } = require("graphql");
const {
  Op: { iLike }
} = require("sequelize");
const { resolver } = require("graphql-sequelize");
//const sort = require('../../helpers/sort');
module.exports = ({ Client }) => {
  return {
    test: {
      type: GraphQLString
    },
    user: {
      type: Client,
      args: {
        id: {
          description: "User`s ID",
          type: new GraphQLNonNull(GraphQLString)
        }
      }
    },
    users: {
      type: new GraphQLList(Client)
    },
    usersSearch: {
      type: new GraphQLList(Client),
      args: {
        query: {
          description: "User search",
          type: new GraphQLNonNull(GraphQLString)
        }
      }
    }
  };
};
