var http = require('http');
var bl = require('bl');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];


var count = 0;
var data = [];

function checkCompleted() {
   if(count == 3) {
   	 for(var i=0; i<data.length; i++){
   	 	console.log(data[i]);
   	 }
   	 return true;
   } else {
   	return false;
   }
} 

function requestUrl(url, dataArray, index) {
    http.get(url, function(res) {
   
	    res.pipe(bl(function (err, data) {
	   	  count++;
	   	  dataArray[index] = data.toString();
	   	  checkCompleted();
	    }));
  
	});
}

requestUrl(url1, data, 0);
requestUrl(url2, data, 1);
requestUrl(url3, data, 2);

