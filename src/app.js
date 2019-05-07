const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

const index = require('./routes/index');
const users = require('./routes/users');

// Rotas
app.use('/api/', index);
app.use('/api/usuarios', users);

module.exports = app;
