const express = require('express');
const app = express();
const fs = require('fs');
let file = 'zakupy.txt';

app.set('view engine', 'ejs');

app.use(express.urlencoded({
    extended: true
}));

app.listen(3000, function(){
    console.log('listening on 3000')
});

app.get('/', (req, resp) => {
    resp.sendFile('index1.ejs', {messages: app.result});
})

app.post('/', function(req, resp){
        let product = req.body.product;
        let cost = req.body.cost;
        let purpose = req.body.purpose;

        resp.send('<p>' + product + ', ' + cost + ', ' + purpose + '<br></p>');

        file.push('<p>' + product + ', ' + cost + ', ' + purpose + '<br></p>');

        fs.appendFile('zakupy.txt', file,function(err){
            if(err)
                throw err;
            console.log('file saved');}
        )
    }
)
/*fs.appendFile('zakupy.txt', 
    , 
    function(err){
        if(err)
            throw err;
        console.log('file saved');}
);

app.post('/messages', (req, resp) => {
    resp.writeHead(200, {'ContentType':'text/html'});
    resp.write('<p>obtained from the form<p>');
    resp.write('<p>' + req.body.name + ' ' + req.body.surname + '</p>');
    resp.write('<p>' + req.body.message + '</p>');
    resp.end();
})*/