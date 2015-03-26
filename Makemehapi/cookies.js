   var Hapi = require('hapi');
      server = new Hapi.Server();

function mySetHandler(req,res){
  res({message: 'success'}).state('session', {key: 'makemehapi'})
}

function myCheckHandler(req,res){
  var session = req.params.session,
      result;
  if(session){
    result = {
      user: 'hapi'
    } 
  } else {
    result = new Hapi.error.unautorized('Missing authentication');
  }
  res(result);
}

   server.connection({
       host: 'localhost',
       port: Number(process.argv[2] || 8080)
   });

  server.state('session', {
    path: '/{path*}',
    encoding: 'base64json',
    ttl: 10,
    domain: 'localhost'
  })

   server.route({
      path: '/set-cookie', 
      method:'GET',
      config: {
         state:{
            parse:true,
            failAction: 'log'
        },
        handler: mySetHandler
      }  
   });

   server.route({
      path: '/check-cookie', 
      method:'GET',
      handler: myCheckHandler
   });




   server.start();