var fs = require('fs');
var buf = fs.readFile(process.argv[2], function callback (err,data){
    if(err) console.log(err);
    var str = data.toString().split('\n').length;
    console.log(str-1);
});
//console.log(buf);
