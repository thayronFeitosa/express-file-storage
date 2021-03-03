const connection = require('../database');
const bcrypt = require("bcryptjs");

class User {

  async insert(req) {
    console.log(req);

    const sql = 'INSERT INTO users SET ?';
    const hast = await bcrypt.hash(req.password, 10)
    req.password = hast;

    const user = await connection.promise().query(sql, req);
    if (user[0].length === 0) throw new Error;
    req.password = '';
    return req
};

};

module.exports = new User;