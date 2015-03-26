   var Hapi = require('hapi');
      server = new Hapi.Server(),
      path = require('path'),
      fs = require('fs'),
      rot13 = require('rot13-transform');

   server.connection({
       host: 'localhost',
       port: Number(process.argv[2] || 8080)
   });

   server.route({
    path: '/', 
    method:'GET',  
      handler: function(req, res){
        var readStream = fs.createReadStream(path.join(__dirname, '/file/file.txt'));
          readStream.on('error', function(err){
              throw err;
          });

          readStream.on('open', function(){
             res(readStream.pipe(rot13()));
          });
        }
      });

   server.start();