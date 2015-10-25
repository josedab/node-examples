var map = require('through2-map');
var http = require('http');
var port = process.argv[2];

var server = http.createServer(function (req, res) {
    if (req.method != 'POST')
        return res.end('Please send a post\n')

    req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase()
    })).pipe(res)

})
server.listen(port);