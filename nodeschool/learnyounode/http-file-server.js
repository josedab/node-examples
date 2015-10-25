var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var filename = process.argv[3];

var server = http.createServer(function (req, res) {

  // This line opens the file as a readable stream
  var readStream = fs.createReadStream(filename);

  res.writeHead(200, { 'content-type': 'text/plain' });
  // This will wait until we know the readable stream is actually valid before piping
  readStream.on('open', function () {
    // This just pipes the read stream to the response object (which goes to the client)
    readStream.pipe(res);
  });

  // This catches any errors that happen while creating the readable stream (usually invalid names)
  readStream.on('error', function(err) {
    res.end(err);
  });

})
server.listen(port);

