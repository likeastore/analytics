var seismo = require('seismo');
var config = require('./config');
var logger = require('./source/utils/logger');

seismo.start(config, function () {
	var env = process.env.NODE_ENV || 'development';
	logger.info('Likeastore analytics listening on port ' + seismo.get('port') + ' ' + env + ' mongo: ' + config.connection);
});