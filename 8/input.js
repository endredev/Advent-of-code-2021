const path = require('path');
const fs = require('fs');
const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n')
	.map((line) => {
		let [before, after] = line.split(' | ');
		let wires = before.split(' ')
		let outputs = after.split(' ')

		return {
			wires,
			outputs,
		};
	});

module.exports = {
	input,
};