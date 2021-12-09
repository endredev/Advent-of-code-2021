const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, "input.txt"), "utf8")
	.split(",")
	.map((n) => Number(n))

module.exports = {
	input,
};
