// ./server.js

const STATIC = ['static'];

const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

var app = express();

// express middleware pour parser le body de requetes http:
// (selon le type MIME)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//le service statique
STATIC.forEach((dir) => app.use('/'+dir, express.static(dir)))

//la base de data
var data = [{
    nom: 'journe',
    prenom: 'victor',
    profession: 'data-scientiste'
},{
    nom: 'peltre',
    prenom: 'olivier',
    profession: 'webmaster'
}];
var ls = fs.readdirSync('static'); 

// index.html
app.get('/', (req, res) => res.redirect('/static/index.html'));


////// <-- ajax.GET /////// 
app.get('/data', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
});
app.get('/ls', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(ls));
});


////// <-- ajax.POST //////

/* Avec un post automatique via:
 *      <form action='url'>,
 * reponds par une redirection pour juste forcer le raffraichissement
 * de la page, en tout cas le client *naviguera* a la reponse.
 */
app.post('/data', (req, res) => {
    console.log(`data: ${req.body}`);
    data.push(req.body);
    res.redirect('/'); 
});

// Avec un post en js pur, reponds ce que tu veux!
app.post('/addition', (req, res) => {
    console.log(`addition: ${req.body}`);
    res.setHeader('Content-Type', 'text/plain');
    res.end(''+req.body.reduce((a,b) => a+b));
});

////// listen on 80 as root
app.listen(8083);
