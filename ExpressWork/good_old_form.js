var express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

	app.use(bodyParser.urlencoded({extended: false}));

app.post('/form', function(req,res){
	console.log(req.body.str.split('').reverse().join(''));
	if(!req.body) return res.sendStatus(400);
	/*res.send();*/
	res.end(req.body.str.split('').reverse().join(''));
})


app.listen(process.argv[2]);



