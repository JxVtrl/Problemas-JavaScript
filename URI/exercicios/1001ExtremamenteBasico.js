/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = Number(lines.shift())
var B = Number(lines.shift())
var X = A + B

console.log(`X = ${X}`)