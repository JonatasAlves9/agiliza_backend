import express, { Router } from 'express';
import userRouter from './users.routes';
import categoryRouter from './categories.routes';

const routes = Router();

routes.get('/', (request, response) =>
  response.json({ message: 'Hello Word' })
);
// middleware
routes.use(express.json());
routes.use(express.urlencoded());
routes.use('/users', userRouter);
routes.use('/categories', categoryRouter);

export default routes;