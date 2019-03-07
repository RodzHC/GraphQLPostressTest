console.log('iniciando graphserver');
const graphqlAPP = require('./models/entry.js');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Connect');
});

graphqlAPP(app);
