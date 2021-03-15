import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { FileRepository } from '../repositories/FileRepository'

class FileController {

  async create(request: Request, response: Response) {
    
    try {
      const { originalname: name, filename: keyName, size } = request.file;
      const { idUser } = request.body;
      console.log(request.body);
      
      const filesRepository = getCustomRepository(FileRepository)
      const dataNow = new Date();

      const dataurtl = process.env.APP_URL;

      const file = filesRepository.create({
        name: name,
        keyName,
        size: size.toString(),
        url: dataurtl + keyName,
        createAt: dataNow,
        user: idUser
      });

      await filesRepository.save(file);
      return response.status(201).json(file);
      
    } catch (error) {
      return response.status(400).json({error: error.message});

    }


  }

}

export { FileController };