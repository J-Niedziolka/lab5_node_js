const http = require('http');

const fs = require('fs');

http.createServer(function (req, resp){
    console.log('Server received request');

    var filePath = ".." + req.url;
    if (filePath == "../")
        filePath = "../index.html";

    fs.readFile(filePath, function(error,content){
        if (error) {
            resp.writeHead(500);
            resp.end();
        } else {
            const path = require('path');
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
            resp.writeHead(200, {'ContentType':contentType});
            resp.write(content);
            resp.end();
        }
    });

}).listen(3000);
console.log('server started on port 3000');