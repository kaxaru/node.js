   var Hapi = require('hapi');
      server = new Hapi.Server(),
      Joi = require('joi');

   server.connection({
       host: 'localhost',
       port: Number(process.argv[2] || 8080)
   });

   server.route({
    path: '/login', 
    method:'POST',  
    config: {
      handler:  function(req,res){
        res("login successful")
      },
      validate: {
        payload: Joi.object({
          isGuest: Joi.boolean(),
          username: Joi.string().when('isGuest', {is: false, then: Joi.required() }),
          accessToken: Joi.string().alphanum(),
          password: Joi.string().alphanum()
     })
       .options({allowUnknown: true})
       /*.with('username', 'birthyear')*/
       .without('password', 'accessToken')
}
    }
      });

   server.start();