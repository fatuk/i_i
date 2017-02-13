var express = require('express');
var app = express();
var index = require('./routes/index');
var text = require('./routes/text');

app.use('/', index);
app.use('/text', text);

app.listen(8080, function() {
	console.log('App is listening to 8080 port');
});

module.exports = app;
