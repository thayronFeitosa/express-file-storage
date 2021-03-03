const { Router } = require('express');
const user = require('../models/User');

const userNpsController = Router();

userNpsController.post('/insert', async (request, response) => {

  const { name, cpf, email, password, lastName} = request.body

  const dataUser = {
    name,
    lastName,
    email, 
    cpf,
    password,
    create_at: new Date()
  }

  const userResponse  =  await user.insert(dataUser);
  

  console.log(userResponse)

})

module.exports = userNpsController;
