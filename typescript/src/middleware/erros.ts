import { ErrorRequestHandler, Request, Response, NextFunction, } from 'express';

import multer from 'multer';

export default function ErrosGenerics(error: ErrorRequestHandler, request: Request, response: Response, next: NextFunction,) {

  if (error instanceof multer.MulterError) {
    response.status(500).json({error: error});

  } else if (error) {
    response.status(500).json({error: error});
  }
  return next();


}