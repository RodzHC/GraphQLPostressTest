const { GraphQLNonNull, GraphQLString, GraphQLList } = require("graphql");
const {
  Op: { iLike }
} = require("sequelize");
const { resolver } = require("graphql-sequelize");
//const sort = require('../../helpers/sort');

module.exports = ({ ClientSS }) => {
  return {
    Query: {
      test: function(a, b, c, d) {
        return "Teste";
      },
      user: resolver(ClientSS, {
        after: result => (result.length ? result[0] : result)
      }),
      users: resolver(ClientSS),
      usersSearch: resolver(ClientSS, {
        dataLoader: false,
        before: (findOptions, args) => ({
          where: {
            name: {
              [iLike]: `%${args.query}%`
            }
          },
          ...findOptions,
          order: [["name", "ASC"]]
        })
        //	after: sort
      })
    },
    Mutation: {}
  };
};
