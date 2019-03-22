var fs = require("fs");
const { merge } = require("lodash");
const { printType } = require("graphql");
("use strict");
const { GraphQLObjectType } = require("graphql");

const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const db = {};

module.exports.sequelizeLoader = function(sequelizeConnection, dirname) {
  fs.readdirSync(dirname)
    .filter(file => {
      return (
        file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
      );
    })
    .forEach(file => {
      const model = sequelize["import"](path.join(dirname, file));
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
};
module.exports.graphqlLoader = function(sequelizeConnection, dirname) {
  var obj = {
    typeDefs: [],
    resolvers: {}
  };
  var db = {};
  var queries = {};
  var mutations = {};

  fs.readdirSync(dirname).forEach(function(pathName) {
    try {
      if (fs.statSync(path.join(dirname, pathName)).isDirectory()) {
        console.log(`Loading ${pathName} Types... `);
        //Initialize Sequelize
        const sequelizeSchema = require(path.join(dirname, pathName))(
          sequelizeConnection,
          Sequelize
        );
        //SS for Sequelize Schema
        const schemaName = pathName + "SS";
        db[schemaName] = sequelizeSchema;

        typeAux = require(path.join(dirname, pathName, "types"))(
          sequelizeSchema
        );

        db[pathName] = typeAux;
        obj.typeDefs.push(printType(typeAux));
        console.log("OK");
      }
    } catch (error) {
      if (error.code === "MODULE_NOT_FOUND") {
        console.log(pathName + " do not have a Type.");
      } else {
        console.log(error);
      }
    }
  });

  /*
   *Load Queries and Mutations
   */
  console.log("Loading Queries-Mutations");
  fs.readdirSync(dirname).forEach(function(pathName) {
    try {
      if (fs.statSync(path.join(dirname, pathName)).isDirectory()) {
        queriesAux = require(path.join(dirname, pathName, "queries"))(db);
        queries = merge(queries, queriesAux);
        mutationsAux = require(path.join(dirname, pathName, "mutations"))(db);
        mutations = merge(mutations, queriesAux);
        //Load Resolvers
      }
    } catch (error) {
      if (error.code === "MODULE_NOT_FOUND") {
        console.log(
          "Model " + pathName + " don't have a Querie, Mutation or Resolver."
        );
      } else {
        console.log(error);
      }
    }
  });

  obj.typeDefs.push(
    printType(
      new GraphQLObjectType({
        name: "Query",
        description: "Root Query Type",
        fields: queries
      })
    )
  );
  obj.typeDefs.push(
    printType(
      new GraphQLObjectType({
        name: "Mutation",
        description: "Root Mutation Type",
        fields: mutations
      })
    )
  );
  return obj;
};
