const express = require('express');
const cors = require('cors');
const router = require('./router')

const app = express(); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use(router);

app.listen(3333, () => console.log('🚀️ servidor rodando na porta 3333'))