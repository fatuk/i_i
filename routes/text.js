var express = require('express');
var router = express.Router();

var Texter = require('../modules/Text');

/**
* url params: color, x, y
*/

router.get('/:width?/:height?/:msg?', function(req, res, next) {
	var queryParams = {
		text: req.params.msg || 'Add param',
		color: req.query.color || '#00ff00',
		x: parseInt(req.query.x, 10) || 10,
		y: parseInt(req.query.y, 10) || 30,
		width: parseInt(req.params.width, 10) || 200,
		height: parseInt(req.params.height, 10) || 200
	};
	var texter = new Texter(queryParams.width, queryParams.height);
	texter.color = queryParams.color;
	texter.x = queryParams.x;
	texter.y = queryParams.y;
	texter.getImage(queryParams.text);

	res.writeHead(200, {
		'Content-Type': 'image/png',
		'Content-Length': texter.img.length
	});

	res.end(texter.img);
});

module.exports = router;
