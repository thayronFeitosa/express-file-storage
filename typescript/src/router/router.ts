import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';
import { FileController } from '../controller/FileController';
import { UserController } from '../controller/UserController';


const upload = multer(uploadConfig);
const router = Router();

const userController = new UserController();
const fileController = new FileController();


router.post('/user/create', userController.create);
router.post('/file/uplaod', upload.single('file'), fileController.create);

export { router };
