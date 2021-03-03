const connection = require('../database');

class File {

 async select(valores) {
    try {
      const { id_user, tipo } = valores;
      console.log(tipo);
      const sql = `SELECT * FROM arquivos WHERE id_user = ? and tipo = ?`;
      const user = await connection.promise().query(sql, [id_user, tipo]);
        if (user[0].length === 0) {
          return false;
        }
        return user[0]
    } catch (err) {
      console.log(err);
    }
  };
};

module.exports = new File;