var express = require('express');

var app = express();

function internalServiceMiddlewareChain(request, response, next) {
	var user = {
		name: 'Anonymous',
		admin: false
	};

	request.user = user;
	next();
}
app.use(internalServiceMiddlewareChain);


app.get('/', function(request, response){
	response.send({
		foo:'bar',
		user: request.user
	});

});



app.listen(3000);

