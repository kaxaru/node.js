   var Hapi = require('hapi');
      server = new Hapi.Server(),
      joi = require('joi');

   server.connection({
       host: 'localhost',
       port: Number(process.argv[2] || 8080)
   });

   server.route({
    path: '/chickens/{breed}', 
    method:'GET',  
    config: {
      handler:  function(req,res){
        res(console.log(req.params.breed))
      },
      validate: {
        params: {
           breed: joi.string().required()
        }
      }
    }
      });

   server.start();