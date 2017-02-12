var express = require('express');
var router = express.Router();
var Canvas = require('canvas'),
	Image = Canvas.Image,
	canvas = new Canvas(200, 200),
	ctx = canvas.getContext('2d');

ctx.font = '30px Impact';
ctx.rotate(.1);
ctx.fillText('Awesome!', 50, 100);

var textMsg = ctx.measureText('Awesome!');
ctx.strokeStyle = 'rgba(0,0,0,0.5)';
ctx.beginPath();
ctx.lineTo(50, 102);
ctx.lineTo(50 + textMsg.width, 102);
ctx.stroke();

var base64ImageData = canvas.toDataURL().split(',')[1];
var img = new Buffer(base64ImageData, 'base64');

/* GET text page. */
router.get('/', function(req, res, next) {
	// res.send('text');
	res.writeHead(200, {
		'Content-Type': 'image/png',
		'Content-Length': img.length
	});

	res.end(img);
});

module.exports = router;