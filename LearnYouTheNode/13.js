var http = require('http');
var url = require('url');

console.log(process.argv);

http.createServer(function(req,res){
var req_url = url.parse(req.url,true);
var path = req_url.pathname;

getTime(req_url.query.iso, res)

 res.writeHead(200, {'Content-Type': 'application/json'})

 if(path=='*api/parsetime')
 res.end(JSON.stringify({
     hour: Number(time.format('h'),
     minute : Number(time.format('m'),
    sexond: Number(time.format('s')
     )
 }))

res.end()
}).listen(process.argv[2]);

function getTime(iso,res)
{
  if(!iso)
  res.end('invalid query params');
    return
   }