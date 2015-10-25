var net = require('net');
var strftime = require('strftime');
var strftimeCEST = strftime.timezone('-0700')

var port = process.argv[2];

var server = net.createServer(function (socket) {
	var stringDate = strftimeCEST('%F %H:%M', new Date());
    socket.write(stringDate);
    socket.end();

});
server.listen(port);