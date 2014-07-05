var r_dir = require('./read_dir');
var cb = function callback(err,files){
    if(err) console.log(err)
    else {
        for(var i = 0; i<files.length; i++)
        { console.log(files[i])}
    }
}
r_dir(process.argv[2],process.argv[3],cb);
