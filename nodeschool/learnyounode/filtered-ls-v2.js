var filter = require('./module-filtered-ls.js');
var dir = process.argv[2];
var extension = process.argv[3];
filter(dir, extension,function(err,data){

	if(err){
		return console.error('Runtime error', err);
	}

   for(var i = 0; i<data.length; i++){
   	  console.log(data[i]);
   }
   
});
