
// Convert data from `process.stdin` to upper-case data on `process.stdout`
// using the `through2` module.

var through = require('through2');
process.stdin
    .pipe(
        through(
	        function(buffer, encoding, next){
	            this.push(buffer.toString().toUpperCase());
	            next();
	        }
	    )
	)    
    .pipe(process.stdout);



