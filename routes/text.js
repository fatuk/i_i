var express = require('express');
var router = express.Router();

var Texter = require('../modules/texter');

/*var position = {
	x: 20,
	y: 100
};
var canvas = new Canvas(canvasWidth, canvasHeight);
var ctx = canvas.getContext('2d');*/

/* GET text page. */
router.get('/', function(req, res, next) {
	var queryParams = {
		text: req.query.msg || 'Add param',
		color: req.query.color || '#00ff00',
		width: parseInt(req.query.w, 10) || 200,
		height: parseInt(req.query.h, 10) || 200
	};
	var texter = new Texter(queryParams.width, queryParams.height);
	texter.color = queryParams.color;
	texter.getImage(queryParams.text);

	res.writeHead(200, {
		'Content-Type': 'image/png',
		'Content-Length': texter.img.length
	});

	res.end(texter.img);
});

module.exports = router;
