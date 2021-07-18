import express, { Router } from 'express';
import userRouter from './users.routes';

const routes = Router();

routes.get('/', (request, response) =>
  response.json({ message: 'Hello Word' })
);
// middleware
routes.use(express.json());
routes.use(express.urlencoded());
routes.use('/users', userRouter);

export default routes;