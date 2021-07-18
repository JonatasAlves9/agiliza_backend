import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getRepository, Repository } from 'typeorm';
import CreateUserService from '../services/CreateUserService';
import User from '../models/user';

const userRouter = Router();

userRouter.post('/signIn', async (request, response) => {
    try {
        const { 
            email,
            password,
        } = request.body;
        
        const emailLowerCased = email.toLowerCase();
        const RepositoryUser = getRepository(User);
        const checkUserExists = await RepositoryUser.findOne({
            where: { email, password },
          });
    
        return response.json({
            user: checkUserExists,
            success: true,
            message: 'Signout success'
        });

      } catch (err: any) {
        return response.status(400).json({ error: err.message });
      }
});

userRouter.post('/signout', async (request, response) => {
  try {
    const { 
        name,
        email,
        password,
        phone,
        city_id
    } = request.body;
    
    const createUser = new CreateUserService();

    const nameLowerCased = name.toLowerCase();
    const emailLowerCased = email.toLowerCase();

    const user = await createUser.execute({
      name: nameLowerCased,
      email: emailLowerCased,
      password,
      phone,
      city_id
    });
    return response.json({
        user,
        success: true,
        message: 'Signout success'
    });
  } catch (err: any) {
    return response.status(400).json({ error: err.message });
  }
});

export default userRouter;