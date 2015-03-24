var express = require('express'),
	app = express();
console.log(process.argv[2]);
app.use(express.static(process.argv[3]));
app.listen(process.argv[2]);