var http = require('http');
var url = process.argv[2];

http.get(url, function(res){
   //console.log(data.toString());

   res.setEncoding('utf8');
   res.on('data', function(data){
   	console.log(data);
   });

   res.on('error', function(error){
     throw error;
   });

}).on('error', function(error){
	console.error('There was an error', error);
});
