import express, { Router } from 'express';
import userRouter from './users.routes';
import categoryRouter from './categories.routes';
import servicesStatusRouter from './services_status.routes';
import servicesRouter from './services.routes';

const routes = Router();

routes.get('/', (request, response) =>
  response.json({ message: 'Hello Word' })
);
// middleware
routes.use(express.json());
routes.use(express.urlencoded());
routes.use('/users', userRouter);
routes.use('/categories', categoryRouter);
routes.use('/services_status', servicesStatusRouter);
routes.use('/services', servicesRouter);

export default routes;