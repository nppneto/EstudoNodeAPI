const pool = require('./config');

module.exports = class User {

    // Instância da conexão com o banco
    constructor() {}
    
    insertUser(res, next) {
        const sql = "INSERT INTO users (nome, email) VALUES ?";  
        pool.getConnection((err, connection) => {
            if(err) return next(err);
            connection.query(sql, [values], function(err) {
                connection.release();
                if(err) return next(err);
                console.log('Registros adicionados com sucesso!');
                conn.end();
            });
        });
    }
    
    selectAll(sql, res, next) {
        pool.getConnection((err, connection) => {
            if(err) return next(err);
            connection.query(sql, (err, users) => {
                connection.release();
                if(err) return next(err);
                res.json(users);
            });
        });
    }

}