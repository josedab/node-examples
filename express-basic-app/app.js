var express = require('express');
var bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.urlencoded());

app.get('/', function(request, response){
	response.send({
		foo:'bar'
	});

});

app.post('/doSomething', function(request, response){
	var param = request.param('foo');

	response.send({
		foo: param
	});

});


app.listen(3000);

