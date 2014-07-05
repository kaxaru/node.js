var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString().split('\n');
console.log(str.length - 1);
