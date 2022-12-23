// var htt = require('http'); //bisa juga sih ini
var http = require('http');

var fs = require('fs');

function handleRequest(req, res) {
    // res.end('Selamat datang di NodeJS');
    res.writeHead(200, {'Content-Type': 'text/html'});

    fs.readFile('./index.html', null, function(error, data){
        if(error){
            res.writeHead(404);
            res.write('File not found!');
        }
        else{
            res.write(data);
        }

        res.end();
    })
}

// var server = http.createServer(handleRequest);

var server = http.createServer(handleRequest);

server.listen(3000, function(){
    console.log('Sedang berjalan pada http://localhost:3000/');
});