var crypto = require('crypto');
var tar = require('tar');
var zlib = require('zlib');
var through = require('through');
var parser = tar.Parse();

var gunzip = zlib.createGunzip();

var stream = crypto.createDecipher(process.argv[2], process.argv[3]);


function entry(e){
        if(e.type != 'File'){
            return;
        }

    function write(data){
          this.queue(data.toString() + " " + e.path + "\n");
    }

    e
        .pipe(crypto.createHash('md5', { encoding : 'hex'}))
        .pipe(through(write))
        .pipe(process.stdout)


    }


parser.on('entry',entry);


process.stdin
    .pipe(stream)
    .pipe(gunzip)
    .pipe(parser);



