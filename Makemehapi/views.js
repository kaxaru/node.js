   var Hapi = require('hapi');
      server = new Hapi.Server(),
      path = require('path'),
      HB = require('handlebars')


   server.connection({
       host: 'localhost',
       port: Number(process.argv[2] || 8080)
   });

  server.views({
      engines: {
          html: HB
      },
      path: path.join(__dirname, '/templates')
  });

   server.route({
    path: '/', 
    method:'GET',  
      handler: {
          view: "index.html"
      }
   })

   server.start();