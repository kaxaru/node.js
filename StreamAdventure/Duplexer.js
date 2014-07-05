var spawn = require('child_process').spawn,
    duplex = require('duplexer');

module.exports = function(cmd, args){

   var child = spawn(cmd,args)

   return duplex(child.stdin,child.stdout)
}
