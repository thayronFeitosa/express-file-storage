const connection = require('../database');

class File {

 async select(valores) {
    try {
      const { id_user, typeFile, typeDoc } = valores;
      const sql = `SELECT * FROM arquivos WHERE id_user = ? and typeDoc = ? and typeFile = ?`;
      const user = await connection.promise().query(sql, [id_user, typeDoc, typeFile]);
        if (user[0].length === 0) {
          return false;
        }
        return user[0][0]
    } catch (err) {
      console.log(err);
    }
  };

  async update (id, valores) {
    try {
      const sql = `UPDATE arquivos SET ? WHERE id=?`;
      const file = await connection.promise().query(sql, [valores, id]);
        if (file[0].length === 0) {
          return false;
        }
        return file[0]
    } catch (err) {
      console.log(err);
    }

  }

  async insert (req) {
    try {
      const sql = 'INSERT INTO arquivos SET ?';

      const fileResponse = await connection.promise().query(sql, req);
      if (fileResponse[0].length === 0) return false;
      return req
    } catch (err) {
      console.log(err);
    }
  }
};


module.exports = new File;