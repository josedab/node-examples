var fs = require('fs');

var buffer = fs.readFile(process.argv[2], function(err, data){
    var lines = data.toString().split('\n').length - 1;
    console.log(lines);
});

