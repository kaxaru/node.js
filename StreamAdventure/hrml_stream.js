var through = require('through'),
    trumpet = require('trumpet');
    tr = trumpet();

var loud = tr.select('.loud').createStream();

loud.pipe(through(function(buf){
    this.queue(buf.toString().toUpperCase())
})).pipe(loud);

process.stdin
    .pipe(tr)
    .pipe(process.stdout);
