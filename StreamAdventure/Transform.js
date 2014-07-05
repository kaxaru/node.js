var through = require('through');

var tr = through(
        function(data){
            this.queue(data.toString().toUpperCase()||null);
        }
)


process.stdin
                .pipe(tr)
                .pipe(process.stdout);