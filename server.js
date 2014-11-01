var http = require('http');
var ecstatic = require('ecstatic')(__dirname + '/static');
var appver = require('../')();

var server = http.createServer(function (req, res) {
    console.error(req.method, req.url);
    
    if (appver.exec(req, res)) {}
    else stdir(req, res)
});
server.listen(0, function () {
    console.error('http://localhost:' + server.address().port);
});
