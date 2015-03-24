var express = require('express'),
	app = express(),
	fs = require('fs');

app.get('/books', function(req,res){
	fs.readFile(process.argv[3], function(err, data){
		if(err) throw err;
		try{
			var books = JSON.parse(data.toString());
			res.json(books);
		} catch(err) {
			res.send(500);
		}
	})
})

app.listen(process.argv[2]);