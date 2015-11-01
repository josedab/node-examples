// Create an Express.js app with a home page rendered by the Jade template engine.

// The home page should respond to /home.

// The view should show the current date using 'new Date.toDateString()'.

// We use 'toDateString()' to simply return the date in a human-readable format
// without the time.

var express = require('express')
var path = require('path')

var app = express()
app.set('views', process.argv[3]  || path.join(__dirname, 'templates'));
app.set('view engine', 'jade');

app.get('/home', function(req, res) {
  res.render('index' , {date: new Date().toDateString()});
})
app.listen(process.argv[2])