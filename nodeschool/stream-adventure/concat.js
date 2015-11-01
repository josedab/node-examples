
// You will be given text on process.stdin. Buffer the text and reverse it using
// the `concat-stream` module before writing it to stdout.

var concat = require('concat-stream');
var split = require('split');
process.stdin.pipe(
        concat(function(body){
            console.log(body.toString().split('').reverse().join(''));
        })
	);



