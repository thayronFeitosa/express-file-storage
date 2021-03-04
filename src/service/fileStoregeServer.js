const { Router } = require('express');
const paths = require('path');
const fs = require('fs');
const multer = require('multer');
const uploadConfig = require('../config/upload');
const upload = multer(uploadConfig);
const filerUser = require('../models/File')
const fileStoregeServer = Router();
const FindUser = require('../models/User');

fileStoregeServer.patch('/upload', upload.single('files'), async (request, response) => {

  try {
    const { document, id_user } = request.body;
    const { filename, originalname, mimetype, path } = request.file;

    const valores = { id_user: id_user, typeDoc: document, typeFile: mimetype.split('/')[1] }
   
    const user = await filerUser.select(valores);

    const isertFile = { id_user, filename, typeFile: mimetype.split('/')[1], typeDoc: document,  originalname, path }

    if (!user) {
      await filerUser.insert(isertFile)
      return response.status(201).json({"sucess": "arquivo gravado no banco de dados"})
    }

    const caminho = paths.join(uploadConfig.directory, user.filename)

    const existes = fs.existsSync(caminho);
    if (!existes) {
      await filerUser.insert(isertFile);
      return response.status(201).json({ error: 'arquivo criado' });
    }

    if (existes) {
      fs.promises.unlink(caminho);
      filerUser.update(user.id, {filename, typeFile: mimetype.split('/')[1], typeDoc: document, originalname, path})
      return response.status(400).json({ error: 'arquivo trocado' });
    }

    fs.promises.unlink(caminho);

  } catch (err) {
    console.log(err);
  }
})

module.exports = fileStoregeServer;