var config = {
	connection: 'mongodb://localhost:27017/likeastoredb',

	applicationUrl: 'http://localhost:3005',

	authKey: 'ffbac26ce2b99cfc3c60a7eb911a108d4823ba1a',

	tokenTtl: 60,

	logentries: {
		token: null
	},

	users: {
		'likeastore': '$2a$12$fPTyhskVoEbydXo/Yby0QOYKDhejWej7SPrMQ7TXrj4Pmp9HuUUGS'
	}
};

module.exports = config;