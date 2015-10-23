var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var extension = process.argv[3];

var buffer = fs.readdir(dir, function(err, files){
    for(var i = 0; i< files.length; i++){
      var extensionFile = path.extname(files[i]);
      if(extensionFile === '.' + extension){
        console.log(files[i]);
      }
     }

});

