const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'nps',
    database: 'sgac',
    password: 'root123',
    multipleStatements: true,
});

module.exports = connection;
