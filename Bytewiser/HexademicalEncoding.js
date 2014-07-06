var str = [];

for(var i = 2; i < process.argv.length; i++){
 str.push(parseInt(process.argv[i]));
}

var buf = new Buffer(str);
console.log(buf.toString('hex'));
