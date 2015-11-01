
// Instead of transforming every line as in the previous "TRANSFORM" example,
// for this challenge, convert even-numbered lines to upper-case and odd-numbered
// lines to lower-case. Consider the first line to be odd-numbered.

var through = require('through2');
var split = require('split');
var lineNumber = 1;
process.stdin.pipe(split())
    .pipe(
        through(
	        function(buffer, encoding, next) {
	        	if (lineNumber%2 == 0) {
					this.push(buffer.toString().toUpperCase() + '\n');
	        	} 
	        	else {
					this.push(buffer.toString().toLowerCase() + '\n');
	        	} 
	            lineNumber++;
	            next();
	        }
	    )
	)    
    .pipe(process.stdout);



