   var Hapi = require('hapi');
      server = new Hapi.Server(),
      Joi = require('joi');

   server.connection({
       host: 'localhost',
       port: Number(process.argv[2] || 8080)
   });

function uploadHandler(req,res){
  var body = '';

  req.payload.file.on('data', function(data){
       body += data;
  });

  req.payload.file.on('end', function(){
      var hapiPath = req.payload.file.hapi;

      res(JSON.stringify({
                          file: {
                                  data: body,
                                  filename: hapiPath.filename,
                                  headers: hapiPath.headers
                          },
                          description: hapiPath.description
       }));
  });
}
   server.route({
    path: '/upload', 
    method:'POST', 
      config: {
          payload: {
            output: 'stream',
            parse: true,
            allow: 'multipart/form-data'
          },
          handler:  uploadHandler
      }
    });

   server.start();