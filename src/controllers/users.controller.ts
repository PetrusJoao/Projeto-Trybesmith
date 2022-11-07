import { Request, Response } from 'express';
import createToken from '../middlewares/createToken';
import UsersService from '../services/users.service';

export default class UsersController {
  usersService = new UsersService();

  createUser = async (req: Request, res: Response) => {
    const user = req.body;

    const token = createToken(user);

    await this.usersService.createUser(user);
    res.status(201).json({ token });
  };

  // async getAllUsers(req: Request, res: Response) {
  //   const users = await this.usersService.getAllProducts();
  //   res.status(200).json(users);
  // }
}