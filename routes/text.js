var express = require('express');
var router = express.Router();
var Canvas = require('canvas');

var canvasWidth = 200;
var canvasHeight = 200;
var position = {
	x: 20,
	y: 100
};
var Image = Canvas.Image;
var canvas = new Canvas(canvasWidth, canvasHeight);
var ctx = canvas.getContext('2d');

/* GET text page. */
router.get('/', function(req, res, next) {
	var queryParams = {
		text: req.query.msg || 'Add param',
		color: req.query.color || '#00ff00'
	};

	clearCanvas(canvas);
	renderText(queryParams.text);
	makeUnderline(queryParams.text);

	var base64ImageData = canvas.toDataURL().split(',')[1];
	var img = new Buffer(base64ImageData, 'base64');

	res.writeHead(200, {
		'Content-Type': 'image/png',
		'Content-Length': img.length
	});

	res.end(img);
});

function clearCanvas(_canvas) {
	_canvas.getContext('2d').clearRect(0, 0, _canvas.width, _canvas.height);
}

function makeUnderline(_text) {
	var textMsg = ctx.measureText(_text);

	ctx.strokeStyle = 'rgba(0,0,0,0.5)';
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.lineTo(position.x, position.y + ctx.lineWidth);

	ctx.lineTo(position.x + textMsg.width, position.y + ctx.lineWidth);
	ctx.stroke();
}

function renderText(_text) {
	ctx.font = '30px Impact';
	// ctx.fillStyle = queryParams.color;
	ctx.fillText(_text, position.x, position.y);
}

module.exports = router;
