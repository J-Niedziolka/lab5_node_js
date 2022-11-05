const http = require('http');

const dt = require('../mymodule1.js');

const server = http.createServer(function (req, res)
{
    res.write('Hello world!\n\tat: ' + dt.myDate());
    res.end();
});

server.listen(3000);

console.log("i'm listening on port 3000...");