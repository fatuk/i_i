var express = require('express');
var app = express();
var index = require('./routes/index');
var text = require('./routes/text');
var port = process.env.PORT || 8080;

app.use('/', index);
app.use('/text', text);

app.listen(port, function() {
	console.log('App is listening to ' + port + ' port');
});

module.exports = app;
