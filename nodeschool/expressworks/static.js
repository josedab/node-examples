// Create an Express.js app that outputs "Hello World!" when somebody goes to /home.

// The port number will be provided to you by expressworks as the first argument of
// the application, i.e., process.argv[2].
var express = require('express')
var path = require('path')

var app = express();
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
app.listen(process.argv[2])