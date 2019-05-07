const mysql = require('mysql');

const config = {
    connectionLimit: 10,
    host: 'localhost',
    port: 3306,
    user: 'nelsonp2n',
    password: 'codinome',
    database: 'NodeAPI'
};

const pool = mysql.createPool(config);

module.exports = pool;