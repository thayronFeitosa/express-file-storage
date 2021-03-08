const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');
const Post = require('./models/Post');

routes.post('/posts', multer(multerConfig).single('file'), async (request, response) => {
  const {originalname: name, filename: keyName, size } = request.file;
  const dataurtl = process.env.APP_URL;
  console.log(dataurtl);
  const data = {
    name,
    size,
    keyName,
    url: dataurtl + keyName,
  }
  const post = await Post.insert(data);

  response.status(201).json({ message: post })
});

module.exports = routes;
