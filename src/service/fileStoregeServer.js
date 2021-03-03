const { Router } = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const uploadConfig = require('../config/upload');
const upload = multer(uploadConfig);
const filerUser = require('../models/File')
const fileStoregeServer = Router();

fileStoregeServer.patch('/upload', upload.single('files'), async (request, response) => {

  try {
    const { document } = request.body;
    const { filename } = request.file;
    
    if(!document || !filename) {
      response.status(400).json({error: 'file e corpos são obrigatorios'});
    }
    
    const valores = {id_user: '1', tipo: document}
     /**
     * Verifica se o usuario existe  no banco de dados caso contratio e feito a inserção do arquivo no banco de dados
     */
    const user =  await filerUser.select(valores)

    // inserir no banco de dados
    // if (!user) {
    //  return  response.status('criar usuario')

    // }


    /**
     * é feito uma validação para verificar se o arquivo contem na pasta tmp
     */
    const caminho = path.join(uploadConfig.directory, 'filename')
    // const existes = await fs.promises.open

   const existes =  fs.existsSync(caminho);
  console.log(existes);
    /**
     * Se o arquivo não existir e armazendo na pasta temp o arquivo e inserido os dados do arquivo no banco de dados
     */
    if (!existes) {
      console.log('....................');
      return  response.status(201).json({error: 'arquivo criado'});
    }
    /**
     * se o arquivo existir e apagado o arquivo anterior e armazenado o novo na pasta temp
     * 
     * 
     * ***** FAZER UM UPDATE NA TABELA COM AS NOVAS INFORMAÇOES DO ARUIVO ****
     */
    
    fs.promises.unlink(caminho);
    response.status(400).json({error: 'arquivo trocado'});

  } catch (err) {
    console.log(err);
  }
})

module.exports = fileStoregeServer;
