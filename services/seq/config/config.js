module.exports = {
	development: {
		username: "postgres",
		password: "postgres",
		database: "db_dev",
		host: process.env.DB_HOST,
		dialect: "postgres"
	},
	test: {
		username: "postgres",
		password: "postgres",
		database: "db_test",
		host: process.env.DB_HOST,
		dialect: "postgres"
	},
	production: {
		username: "root",
		password: "kJa-VTzvt2=AtS&D",
		database: "db_prod",
		host: "127.0.0.1",
		dialect: "postgres"
	}
}
