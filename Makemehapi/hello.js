   var Hapi = require('hapi');
   var server = new Hapi.Server();

   server.connection({
       host: 'localhost',
       port: Number(process.argv[2] || 8080)
   });

   server.route({path: '/', method:'GET', handler: function(req, res){
   		res("Hello Hapi");
   }})

   server.start();