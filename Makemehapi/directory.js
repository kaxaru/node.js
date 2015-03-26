var Hapi = require('hapi'),
	server = new Hapi.Server(),
	path = require('path');

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/foo/bar/baz/{filename}',
    method:'GET',
    handler: {
    	file: path.join(__dirname,'/static/directory.html')
    	/*dyrectory: {
    		path: path.join(__dirname, '/static')
    	}*/
	}
});

server.start();