const {
	readFile
} = require('fs');
module.exports = {
	up(migration) {
		return new Promise((res, rej) => {
			readFile(
				'migrations/initdb.sql',
				'utf8',
				(err, sql) => {
					if (err) return rej(err);
					migration.sequelize.query(sql, {
							raw: true
						})
						.then(res)
						.catch(rej);
				});
		});
	},
	down(migration) {
		//return Promise.all([migration.dropAllTables(),migration.dropAllEnums()
			return migration.dropAllTables().then(()=>migration.dropAllEnums());
//]);
	}
}
