
// In this challenge, write an http server that uses a through stream to write back
// the request stream as upper-cased response data for POST requests.

var http = require('http');
var through = require('through2');

var server = http.createServer(function(req, res){
	if (req.method === 'POST') {
		req.pipe(
			through(
		        function(buffer, encoding, next){
		            this.push(buffer.toString().toUpperCase());
		            next();
		        }
		    )
		).pipe(res);
	} 

});
server.listen(process.argv[2]);



