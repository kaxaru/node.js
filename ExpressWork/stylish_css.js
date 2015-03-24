var express = require('express'),
	app = express(),
	stylus = require('stylus');

app.use(express.static(process.argv[3]));
app.use(stylus.middleware(process.argv[3]));

app.listen(process.argv[2]);