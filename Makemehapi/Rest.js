var Hapi = require('hapi'),
	server = new Hapi.Server(),
	path = require('path');

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/',
    method:'GET',
    handler: {
    	file: path.join(__dirname, '/static/index.html')
	}
})

server.start();