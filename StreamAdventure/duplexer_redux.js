var duplex = require('duplexer');
var through = require('through');

module.exports = function(counter){

var counts = {};
    var input = through(write,end);

    return duplex(input, counter)

    function write(row){
        var country = row.country;
        var count = counts[country] || 0;
        counts[country] = count + 1;
    }

    function end(){
        counter.setCounts(counts)
        counts = {}

    }

}

