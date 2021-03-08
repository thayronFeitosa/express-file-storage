const connection = require('../connection');

class User {

  async insert(req) {
    req.createAt = new Date();

    const sql = 'INSERT INTO image SET ?';

    const user = await connection.promise().query(sql, req);
    if (user[0].length === 0) throw new Error;
    return req
  };

};

module.exports = new User;
