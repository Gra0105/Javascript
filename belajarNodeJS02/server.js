// SERVER.JS

var http = require('http');
var route = require('./route');
// var rute = require('./route');

http.createServer(route.handleRequest).listen(3000);
// http.createServer(rute.handleRequest);