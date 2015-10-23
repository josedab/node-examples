var fs = require('fs');
var path = require('path');

function filterFiles(dir, extension, callback) {
  fs.readdir(dir, function(err, files){
    var result = files;
    if(err) {
      return callback(err);
    }


    result = result.filter(function(file){
      var extensionFile = path.extname(file);
      if(extensionFile === '.' + extension){
        return true;
      }
    });

   
    callback(null, result);
  });

}

module.exports = filterFiles;


