var through = require('through');

var tr = through(
    function(data){
            this.queue(search(data));
    }
)

function search(buf){
    for (var i = 0; i < buf.length; i++){
        if(buf[i] === 0x2e) {
            buf[i] = "33";
        }
    }
    console.log(buf);
}

process.stdin
            .pipe(tr)


