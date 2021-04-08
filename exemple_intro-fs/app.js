// Módulos nativos/propios/internos de NodeJS
// Son funcionalidades que ya nos vienen de
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    const requestedURL = req.url
    var q = url.parse(requestedURL, true);

    console.log(q.query)

}).listen(8080);