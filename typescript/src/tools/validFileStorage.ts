import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import uploadConfig from '../config/upload';

class ValidFileStorage {
  /**
   * if exists the file in path is deleted the file and returned true else is returned false
   * @param request 
   * @param response 
   * @param nameFile 
   * @param pathFile 
   */
  public validFile(request: Request, response: Response, nameFile: string) {

    try {
      const existsFile = this.findFile(nameFile, uploadConfig.tmpFolder, response);
      if (existsFile) {
      this.deleteFile(nameFile, uploadConfig.tmpFolder, response);
        return true;
      }
      response.status(500).json({ error: 'Internal server error' });

    } catch (error) {
      response.status(500).json({ error: 'Internal server error' });
    }


  }

  private deleteFile(nameFile: string, pathFile: string, response: Response) {
    try {
      const caminho = path.join(pathFile, nameFile)
      
      return fs.unlinkSync(caminho);
    } catch (error) {
      response.status(500).json({ error: 'Internal server error' });
    }
  }

  private findFile(nameFile: string, pathFile: string, response: Response,) {
    try {
      const caminho = path.join(pathFile, nameFile)
      return fs.existsSync(caminho);
    } catch (error) {
      
      response.status(500).json({ error: 'Internal server error' ,erro: error});
    }
  }

  public deleteFilePath(pathFile: string){
    try {
      
      return fs.unlinkSync(pathFile);
    } catch (error) {
   }
  }
}


export { ValidFileStorage };