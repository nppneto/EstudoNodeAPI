const express = require('express');
const app = express();

const index = require('./routes/index');
const users = require('./routes/users');

// Rotas
app.use('/api/', index);
app.use('/api/usuarios', users);

module.exports = app;
