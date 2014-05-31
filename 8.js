var http = require('http');
var bl = require('bl');
var a = process.argv[2];
http.get(a, function(response){
    response.setEncoding('utf8');
    response.on('err',console.error);
    response.pipe(bl(function(err,data){
    if(err) return console.error(err);
        console.log(data.toString().length + '\n' + data.toString());
    }));
})
