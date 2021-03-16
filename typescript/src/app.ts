import * as dotenv from "dotenv";
import 'reflect-metadata';
import express from 'express';
import path from 'path';
import ErrosGenerics from './middleware/erros';

import './database/index'

import { router } from './router/router';


const app = express();
app.use(express.json());
app.use(router);
app.use('/files', express.static(path.join(__dirname, '..', 'tmp')))
app.use(ErrosGenerics)

export { app };
