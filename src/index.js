require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const router = require('./router');
const path = require('path')


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use('/files', express.static(path.join(__dirname, '..', 'tmp', 'uploads')))

app.use(router);

app.listen(3333, () => console.log('servidor rodando na porta 3333'));

