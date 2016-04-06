var path = require('path');
var rootPath = path.normalize(__dirname + '/../'); // normalizes to base path

module.exports = {
	development: {
		rootPath: rootPath,
		database: 'mongodb://localhost/andrew-test',
		port: process.env.PORT || 3000
	},
	production: {
		rootPath: rootPath,
		database: 'mongodb://andrew:andrew@ds015760.mlab.com:15760/heroku_mh85n5vc',
		port: process.env.PORT || 80
	}
};