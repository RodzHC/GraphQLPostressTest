const {
	GraphQLNonNull,
	GraphQLString
} = require("graphql");
const {
	resolver
} = require("graphql-sequelize");

module.exports = (User, userType) => {
	return {
		createUser: {
			type: userType,
			args: {
				name: {
					description: "Unique username",
					type: new GraphQLNonNull(GraphQLString)
				},
				password: {
					description: "Password",
					type: new GraphQLNonNull(GraphQLString)
				}
			},
			resolve: async function (root, {
				name,
				password
			}, context, info) {
				const user = await User.create({
					name,
					password
				});
				return await resolver(User)(
					root, {
						id: user.id
					},
					context,
					info
				);
			}
		}
	};
};
