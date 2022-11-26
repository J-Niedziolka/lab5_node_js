const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.listen(3000, function () {
    console.log('nasluchujemy na 3000')
});

app.get('/', (req, resp) => {
    resp.render('form.ejs', { wiadomosci: app.result });
})

app.post('/wiadomosci', (req, resp) => {
    resp.writeHead(200, { 'ContentType': 'text/html' });
    resp.write('<p>Pobrano z formularza.</p/>');
    resp.write('<p>' + req.body.nazwa + ' ' + req.body.kwota
    + '</p>'); resp.write('<p>' + req.body.cel +
    '</p>');
    //resp.render('form.ejs');
    resp.write('<p><a name="button" href="/form">Strona z formularzem</p>');
    //resp.render('form.ejs');
    resp.end();
})