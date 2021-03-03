const { Router } = require('express');
const fileStoregeServer = require('../service/fileStoregeServer')
const userController = require("../service/userService");

const routes = Router();
routes.use('/api', fileStoregeServer)
routes.use('/api/users', userController)

module.exports = routes;
