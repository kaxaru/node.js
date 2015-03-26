   var Hapi = require('hapi');
      server = new Hapi.Server(),
      path = require('path'),
      HB = require('handlebars')


   server.connection({
       host: 'localhost',
       port: Number(process.argv[2] || 8080)
   });

   server.route({
    path: '/proxy', 
    method:'GET',  
      handler: {
          proxy: {
            host: '127.0.0.1',
            port: 65535
          }
      }
   })

   server.start();