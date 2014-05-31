var fs  = require('fs');
var path = require('path');
var buf = fs.readdir(process.argv[2],function(err,list){
if(err) Console.log(err);
    for(var i = 0; i < list.length; i++)
    {
       var ext = path.extname(list[i]);
       var index = ext.lastIndexOf('.')+1;
    if(ext.slice(index)== process.argv[3])
    {console.log(list[i]);}}
});


