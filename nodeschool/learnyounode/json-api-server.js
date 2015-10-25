var http = require('http');
var url = require('url');
var port = process.argv[2];

function parseTime(date){
	var dateObject = {
      	'hour': date.getHours(),
      	'minute': date.getMinutes(),
      	'second': date.getSeconds()
    };
    return dateObject;
}

function unixTime(date){
	var dateObject = {
      	'unixtime': date.getTime()
    };
    return dateObject;
}

var server = http.createServer(function (req, res) {

    var urlInfo = url.parse(req.url, true);
	var date = new Date(urlInfo.query.iso);
	
	if(urlInfo.pathname === '/api/parsetime') {

      res.writeHead(200, { 'Content-Type': 'application/json' });
      var dateObject = parseTime(date);
      res.write(JSON.stringify(dateObject));

	} else if(urlInfo.pathname === '/api/unixtime') {

      res.writeHead(200, { 'Content-Type': 'application/json' });
      var dateObject = unixTime(date);
      res.write(JSON.stringify(dateObject));

	} else{
	  res.writeHead(404);
	}
	res.end();

});
server.listen(port);