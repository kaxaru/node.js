var split = require('split');
var through = require('through');
var count = 0;

var tr = through(write,end)

function write (buf){
    var data = buf.toString() + '\n';
    this.queue(count%2 === 0 ? data.toLowerCase() : data.toUpperCase());
    count++;
}
function end(){
    this.queue(null);
}



process.stdin
    .pipe(split(''))
    .pipe(tr)
    .pipe(process.stdout);

