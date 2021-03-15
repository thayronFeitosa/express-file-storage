import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';


class UserController {
  async create(request: Request, response: Response) {
    try {

      const { name, lastName, email, cpf, password } = request.body;
      const usersRepository = getCustomRepository(UserRepository);
      
      const userAlreadyExistsEmail = await usersRepository.findOne({ email: email });
      const userAlreadyExistsName = await usersRepository.findOne({ email: email });

      if (userAlreadyExistsEmail) return response.status(400).json({ errro: "Email is already in use" });
      if (userAlreadyExistsName) return response.status(400).json({ error: "Name is already in use" });

      const dataNow = new Date();
      const user = usersRepository.create({
        name,
        lastName,
        email,
        cpf,
        password,
        create_at: dataNow
      })
      await usersRepository.save(user);
      return response.status(201).json(user);

    } catch (error) {
      return response.status(400).json({error: error.message});
    }
  }
}

export { UserController };

