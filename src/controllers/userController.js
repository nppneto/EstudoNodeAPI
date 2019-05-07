const User = require('../database/user');

var userClass = new User();

exports.get = (req, res, next) => {
    userClass.selectAll('SELECT * FROM users', res);
}

exports.post = (req, res, next) => {
    const {name, email} = req.body;
    userClass.insertUser({name, email}, res);
    res.status(201).send('Requisição recebida com sucesso!');
}

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
}

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
}
