const http = require('http');
const fs = require('fs');
http.createServer(function (req, resp) {
    console.log('Serwer dostal żadanie...');
    var filePath = '.' + req.url;
    if (filePath == './')
        filePath = '../index.html';
    fs.readFile(filePath, function(error, content) {
        if (error) {
            resp.writeHead(500);
            resp.end();
        } else {
            resp.writeHead(200, {
                'ContentType': 'text/html'
            });
            resp.write(content);
            resp.end();
        }
    });
}).listen(3000);
console.log('serwer wystartowal na porcie 3000');