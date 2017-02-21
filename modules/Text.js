var Canvas = require('canvas');

var Text = function (_w, _h) {
	var texter = {
		width: _w || 200,
		height: _h || 200,
		x: 10,
		y: 10,
		color: 'green',
		getImage: getImage,
		clearCanvas: clearCanvas
	};
	texter.canvas = new Canvas(texter.width, texter.height);
	texter.ctx = texter.canvas.getContext('2d');

	return texter;
};

function getImage(_text) {
	this.ctx.font = '30px Impact';
	this.ctx.fillStyle = this.color;
	this.ctx.fillText(_text, this.x, this.y);

	var base64ImageData = this.canvas.toDataURL().split(',')[1];
	this.img = new Buffer(base64ImageData, 'base64');
	return this.img;
}

function clearCanvas() {
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

module.exports = Text;
