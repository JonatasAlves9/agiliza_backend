import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getRepository, Repository } from 'typeorm';
import CreateUserService from '../services/CreateUserService';
import Category from '../models/categories';

const categoriesRouter = Router();

categoriesRouter.post('/create', async (request, response) => {
    try {
        const { 
            name
        } = request.body;
        
        const RepositoryUser = getRepository(Category);
        const category = await RepositoryUser.create(
            {
                name
            }
        );

        await RepositoryUser.save(category);
    
        return response.json({
            category: category,
            success: true,
            message: 'Categoria adicionada com sucesso.'
        });

      } catch (err: any) {
        return response.status(400).json({ error: err.message });
      }
});


export default categoriesRouter;