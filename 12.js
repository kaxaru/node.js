var http = require('http');
var map = require('through2-map');

http.createServer(function(req,res){
 req.pipe(map(function(chunk){
   return chunk.toString().toUpperCase();
})).pipe(res);
}).listen(parseInt(process.argv[2]));