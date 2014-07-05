var http = require('http');
var bl = require('bl');
var count = 0;
var result = [];
for(var i = 0; i < 3; i++)
{input(i);}

function input(index){
    http.get(process.argv[2+index], function(response){
        response.setEncoding('utf8');
        response.on('err',console.error);
        response.pipe(bl(function(err,data){
            if(err) return console.error(err);
            result[index] = data.toString();
            count++;
            if (count == 3)
            printResult(result);
        }));
    })
};

function printResult(result)
    {
    for(var i=0;i<result.length;i++)
        console.log(result[i]);
    }