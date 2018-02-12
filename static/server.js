// copy of server.js (true server is above in `static/../`)

const STATIC = ['static'];

const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

var app = express();

// express middleware to parse the body of http requests:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//static serving
STATIC.forEach((dir) => app.use('/'+dir, express.static(dir)))

var data = [{
    nom: 'journe',
    prenom: 'victor',
    profession: 'data-scientiste'
},{
    nom: 'peltre',
    prenom: 'olivier',
    profession: 'webmaster'
}];

// index.html
app.get('/', (req, res) => res.redirect('/static/index.html'));

// <-- ajax.get
app.get('/data', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
});

// <--  ajax.post
app.post('/data', (req, res) => {
    data.push(req.body);
    res.redirect('/');
});

// <-- ajax.get
var ls = fs.readdirSync('static'); // only called once
console.log(ls);
app.get('/ls', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(ls));
});

// listen on 80 as root
app.listen(8083);
