const http = require ('http');
const dt = require("../mymodule1");


const server = http.createServer(function (req, res)
{
    res.write('Hello World!');
    res.write("\nAktualna data i czas to: " + dt.myDate());
    res.end();
});

server.listen(3000);

console.log("I'm listening on port 3000...");

