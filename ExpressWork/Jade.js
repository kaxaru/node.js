var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', process.argv[3]);

app.get('/home', function (req, res) {
	/*res.send('<h1>Hello World</h1><p>Today is Mon Mar 23 2015.</p>');*/
  res.render('index', {date: new Date().toDateString()});
});

app.listen(process.argv[2]);