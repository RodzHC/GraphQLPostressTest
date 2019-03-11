const {
	GraphQLNonNull,
	GraphQLString,
	GraphQLList
} = require("graphql");
const {
	Op: {
		iLike
	}
} = require("sequelize");
const {
	resolver
} = require("graphql-sequelize");
//const sort = require('../../helpers/sort');
module.exports = (User, userType) => {
	return {
		user: {
			type: userType,
			args: {
				id: {
					description: "User`s ID",
					type: new GraphQLNonNull(GraphQLString)
				}
			},
			resolve: resolver(User, {
				after: result => (result.length ? result[0] : result)
			})
		},
		users: {
			type: new GraphQLList(userType),
			resolve: resolver(User)
		},
		usersSearch: {
			type: new GraphQLList(userType),
			args: {
				query: {
					description: "User search",
					type: new GraphQLNonNull(GraphQLString)
				}
			},
			resolve: resolver(User, {
				dataLoader: false,
				before: (findOptions, args) => ({
					where: {
						name: {
							[iLike]: `%${args.query}%`
						}
					},
					...findOptions
					order: [
						["name", "ASC"]
					],
				})
				//	after: sort
			})
		}
	};
};
