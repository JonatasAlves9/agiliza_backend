import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import User from '../models/user';
import UserRepository from '../repositories/UserRepository';

interface Request {
  
    name: string;
    email: string;
    password: string;
    phone: string;
    city_id: number; 
}

class CreateUserService {
  public async execute({
    name,
    email,
    password,
    phone,
    city_id,
  }: Request): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);

    const findUserInSameDate = await userRepository.findByEmail(email);
    if (findUserInSameDate) {
      throw Error('this user is already booked');
    }

    const user = userRepository.create({
        name,
        email,
        password,
        phone,
        city_id
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;