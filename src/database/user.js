const pool = require('./config');

module.exports = class User {

    constructor() {}
    
    insertUser(values, res, next) {
        const sql = "INSERT INTO users (nome, email) VALUES (?, ?)";  
        pool.getConnection((err, connection) => {
            if(err) return next(err);
            connection.query(sql, values, (err) => {
                connection.release();
                if(err) return next(err);
                console.log('Registros adicionados com sucesso!');
            });
        });
    }
    
    selectAll(res, next) {
        const sql = 'SELECT * FROM users';
        pool.getConnection((err, connection) => {
            if(err) return next(err);
            connection.query(sql, (err, users) => {
                connection.release();
                if(err) return next(err);
                res.json(users);
            });
        });
    }

    updateUser(values, res, next) {
        const sql = 'UPDATE users SET nome = ?, email = ? where id = ?';
        pool.getConnection((err, connection) => {
            if(err) return next(err);
            connection.query(sql, values, (err) => {
                connection.release();
                if(err) return next(err);
                console.log('Registro atualizado com sucesso!');
            })
        })
    }

    deleteUser(id, res, next) {
        const sql = 'DELETE FROM users WHERE id = ?';
        pool.getConnection((err, connection) => {
            if(err) return next(err);
            connection.query(sql, id, (err) => {
                connection.release();
                if(err) return next(err);
                console.log('Registro excluído com sucesso!');
            })
        })
    }

}