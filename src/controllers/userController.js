const User = require('../database/user');

var userClass = new User();

exports.get = (req, res, next) => {
    userClass.selectAll(res);
}

exports.post = (req, res, next) => {
    const {name, email} = req.body;
    const values = [name, email];
    userClass.insertUser(values, res);
    res.status(201).send('Usuário cadastrado com sucesso!');
}

exports.put = (req, res, next) => {
    let id = req.params.id;
    const {name, email} = req.body;
    const values = [name, email, id];
    userClass.updateUser(values, res);
    res.status(201).send(`Usuário atualizado com sucesso!`);
}

exports.delete = (req, res, next) => {
    let id = req.params.id;
    userClass.deleteUser(id, res);
    res.status(201).send(`Usuário excluído com sucesso!`);
}
