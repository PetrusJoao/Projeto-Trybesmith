import { Request, Response } from 'express';
import createToken from '../middlewares/createToken';
import UserModel from '../models/users.model';

export default class LoginController {
  loginRequest = async (req: Request, res: Response) => {
    const userModel = new UserModel();

    const login = req.body;
    const { username, password } = login;

    const verifyUser = await userModel.getUser(username, password);

    if (verifyUser.length === 0) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }

    const token = createToken(login);
  
    return res.status(200).json({ token });
  };
}