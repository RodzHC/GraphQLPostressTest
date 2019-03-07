var fs = require('fs');

module.exports = function (sequelizeConnection, modelPath) {
	if (!modelPath) {
		modelPath = '.';
	}

	fs.readdirSync(modelPath).forEach(function (name) {

		if (fs.statSync(name).isDirectory()) {}
	});

}
