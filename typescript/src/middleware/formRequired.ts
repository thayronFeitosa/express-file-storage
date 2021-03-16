import { NextFunction, Request, Response } from 'express';
import { ValidFileStorage } from '../tools/validFileStorage';

export default function Authenticated(request: Request, response: Response, next: NextFunction,) {
  const { user } = request.headers;
  const { idUser, tipeFile } = request.body;
  
  
  if (!request.file) {
    return response.status(401).json({ error: "file parameter is required" });
  }
  const file = request.file;


  if (!user) {
    return response.status(401).json({ error: "user parameter is required" });
  }

  if (!idUser || !tipeFile) {
    const validFileStorage = new ValidFileStorage();
    validFileStorage.deleteFilePath(file.path);
    return response.status(401).json({ error: "idUser and tipeFile  parameter is required" });

  }

  return next();


}