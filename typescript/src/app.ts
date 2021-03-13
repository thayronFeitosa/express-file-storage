import 'reflect-metadata';
import express from 'express';
import './database/index'

import { router } from './router/router';


const app = express();
app.use(express.json());
app.use(router);

export { app };
