var http = require('http');
var bl = require('bl');
var url = process.argv[2];


http.get(url, function(res) {
   
   res.pipe(bl(function (err, data) {
   	  var stringData = data.toString();
      console.log(stringData.length);
      console.log(stringData);
   }));
  

}).on('error', function(error){
	console.error('There was an error', error);
});
