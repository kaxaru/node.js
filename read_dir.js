module.exports = function r_dir_lib (dir,valid_extension,callback){
var fs = require('fs');
var path = require('path');
var buf = fs.readdir(dir,function(err,list){
    var valid_files = [];
    if(err) return callback(err);
        for(var i= 0; i <list.length; i++)
            {
            var ext = path.extname(list[i]);
            var index = ext.lastIndexOf('.')+1;
            if(ext.slice(index)==valid_extension)
             valid_files.push(list[i]);
            }
    callback(null, valid_files);
})
}
//exports.r_dir_lib = r_dir_lib;

