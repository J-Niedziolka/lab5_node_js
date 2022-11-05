//import express, { urlencoded } from 'express';

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({
    extended: true
}));

app.listen(3000, function(){
    console.log('listening on 3000')
});

app.get('/', function(req, resp){
    resp.render('index1.ejs', {messages: app.result});
});

app.post('/messages', (req, resp) => {
    resp.writeHead(200, {'ContentType':'text/html'});
    resp.write('<p>obtained from the form<p>');
    resp.write('<p>' + req.body.name + ' ' + req.body.surname + '</p>');
    resp.write('<p>' + req.body.message + '</p>');
    resp.end();
})