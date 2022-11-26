const http = require('http');
const fs = require('fs');
const path = require('path');
http.createServer(function (req, resp) {
    console.log('Serwer dostal żadanie...');
    var filePath = '..' + req.url;
    if (filePath == '../')
        filePath = '../index.html';
    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch(extname){
        case '.js':
            contentType = 'text/javascript';    
            break;
        case '.css':
            contentType = 'text/css';
            break;
    }
    fs.readFile(filePath, function(error, content) {
        //console.log(filePath); //exp. return - processed files
        if (error) {
            resp.writeHead(500);
            resp.end();
        } else {
            resp.writeHead(200, {
                'ContentType': contentType
            });
            resp.write(content);
            resp.end();
        }
    });
}).listen(3000);
console.log('serwer wystartowal na porcie 3000');