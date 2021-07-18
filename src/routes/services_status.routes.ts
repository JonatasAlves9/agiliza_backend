import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getRepository, Repository } from 'typeorm';
import ServicesStatus from '../models/service_status';

const servicesStatusRouter = Router();

servicesStatusRouter.post('/create', async (request, response) => {
    try {
        const { 
            name,
            color
        } = request.body;
        
        const RepositoryServicesStatus = getRepository(ServicesStatus);
        const service_status = await RepositoryServicesStatus.create(
            {
                name,
                color
            }
        );

        await RepositoryServicesStatus.save(service_status);
    
        return response.json({
            service_status: service_status,
            success: true,
            message: 'Status de serviço adicionada com sucesso.'
        });

      } catch (err: any) {
        return response.status(400).json({ error: err.message });
      }
});


export default servicesStatusRouter;