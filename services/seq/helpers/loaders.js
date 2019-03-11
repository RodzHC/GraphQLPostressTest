var fs = require('fs');
const {
	merge
} = require('lodash');

'use strict';

const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};


module.exports.sequelizeLoader = function (sequelizeConnection, dirname) {


	fs
		.readdirSync(dirname)
		.filter(file => {
			return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
		})
		.forEach(file => {
			const model = sequelize['import'](path.join(dirname, file));
			db[model.name] = model;
		});

	Object.keys(db).forEach(modelName => {
		if (db[modelName].associate) {
			db[modelName].associate(db);
		}
	});

	db.sequelize = sequelize;
	db.Sequelize = Sequelize;

	return db;

}
module.exports.graphqlLoader = function (sequelizeConnection, dirname) {
	var obj = {
		typeDefs: {}
	};
	console.log('Reading directory at: ' + dirname);
	console.log(fs.readdirSync(dirname));
	fs.readdirSync(dirname).forEach(function (pathName) {
		try {
			if (fs.statSync(path.join(dirname, pathName)).isDirectory()) {
				console.log(`Loading ${pathName} Types: `)
				console.log(path.join(dirname, pathName) + "/types");
				//Initialize Sequelize
				const sequelizeSchema = require(path.join(dirname, pathName))(sequelizeConnection, Sequelize);

				//Load Types
				console.log('loading path types: ' + path.join(dirname, pathName, 'types'));
				typeAux =
					require(path.join(dirname, pathName, 'types'))(sequelizeSchema);
				console.log('TYPEAUX ------>');
				console.log(JSON.parse(JSON.stringify(typeAux)));
				//obj.typeDefs[typeAux.] = ;
				//Load resolvers
				obj.resolvers = {};
			}
		} catch (error) {
			console.log(pathName + " do not have a type !");
		}

	});

	return obj;
}
