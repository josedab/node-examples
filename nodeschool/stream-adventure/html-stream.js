
// Your program will get some html written to stdin. Convert all the inner html to
// upper-case for elements with a class name of "loud",
// and pipe all the html to stdout.

var trumpet = require('trumpet');
var through = require('through2');
var fs = require('fs');
var tr = trumpet();

var loud = tr.select('.loud').createStream();
loud.pipe(
    through(
        function(buffer, encoding, next) {
            this.push(buffer.toString().toUpperCase());
            next();
        }
    ))
    .pipe(loud);
process.stdin
        .pipe(tr)  
        .pipe(process.stdout);




