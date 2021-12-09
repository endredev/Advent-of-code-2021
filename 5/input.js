const { join } = require('path')
const fs = require('fs');

const file = fs.readFileSync(join(__dirname, './input.txt'), 'utf8')
const input = file.split('\n').slice(0, -1).map(line => line.replace(' -> ', ',').split(',').map(n => Number(n)))

module.exports = {
	input,
};
