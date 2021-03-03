const { Router } = require('express');
const fileStoregeServer = require('../service/fileStoregeServer')

const routes = Router();
routes.use('/api', fileStoregeServer)

module.exports = routes;
