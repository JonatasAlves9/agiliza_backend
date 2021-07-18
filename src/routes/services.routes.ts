import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getRepository, Repository } from 'typeorm';
import Service from '../models/service';

const servicesRouter = Router();

servicesRouter.post('/create', async (request, response) => {
    try {
        const { 
            user_id,
            category_id,
            title,
            details,
            duration,
            service_status_id,
        } = request.body;
        
        const RepositoryService = getRepository(Service);
        const service = await RepositoryService.create(
            {
                user_id,
                category_id,
                title,
                details,
                duration,
                service_status_id,
            }
        );

        await RepositoryService.save(service);
    
        return response.json({
            category: service,
            success: true,
            message: 'Serviço adicionado com sucesso.'
        });

      } catch (err: any) {
        return response.status(400).json({ error: err.message });
      }
});


export default servicesRouter;