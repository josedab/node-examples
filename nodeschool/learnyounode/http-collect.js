var http = require('http');
var url = process.argv[2];

var rawData = '';
http.get(url, function(res){
   //console.log(data.toString());

   res.setEncoding('utf8');
   res.on('data', function(data){
   	rawData += data;
   });

   res.on('end', function(data){
     console.log(rawData.length);
     console.log(rawData);
   });

}).on('error', function(error){
	console.error('There was an error', error);
});
