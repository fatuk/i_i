var express = require('express');
var app = express();
var index = require('./routes/index');
var text = require('./routes/text');

app.use('/', index);
app.use('/text', text);


/*app.get('/', function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'image/png',
		'Content-Length': img.length
	});

	res.end(img);
});*/

app.listen(5000, function() {
	console.log('App is listening to 5000 port');
});

module.exports = app;
