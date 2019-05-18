var express = require('express');
var app = express();
var cons = require('consolidate');
var path = require('path');

var index = require('./routes/index');

app.set('views', 'views')
app.set('view engine', 'pug'); // setting template engine yang digunakan. Dalam hal ini menggunakan pug.

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);


module.exports = app;