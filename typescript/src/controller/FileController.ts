import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { FileRepository } from '../repositories/FileRepository';
import { ValidFileStorage } from '../tools/validFileStorage';

class FileController {
  async create(request: Request, response: Response) {
    const validFileStorage = new ValidFileStorage();

    try {
      const { originalname: name, filename: keyName, size } = request.file;
      const { idUser, tipeFile } = request.body;

      const filesRepository = getCustomRepository(FileRepository)

      const dataurtl = process.env.APP_URL;

      const fileExists = await filesRepository.findOne({
        where: {
          tipeFile: tipeFile,
          user: idUser,
        }
      });

      if (fileExists) {
        const file = validFileStorage.validFile(request, response, fileExists.keyName);

        if (file) {
          fileExists.keyName = keyName;
          fileExists.url = dataurtl + keyName;

         const result = await filesRepository.save(fileExists);

          return response.status(202).json({ sucess: result});

        }
        return response.status(400).json({ error: keyName });
      }

      const file = filesRepository.create({
        name: name,
        keyName,
        size: size.toString(),
        url: dataurtl + keyName,
        createAt: new Date(),
        user: idUser,
        tipeFile
      });

      await filesRepository.save(file);
      return response.status(201).json(file);

    } catch (error) {
      return response.status(500).json({ error: error.message });

    }


  }

}

export { FileController };