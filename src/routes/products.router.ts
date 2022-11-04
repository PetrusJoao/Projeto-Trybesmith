import { Router } from 'express';
import UserController from '../controllers/products.controller';

const userRouter = Router();

const usersController = new UserController();

userRouter.post('/', (req, res) => usersController.createProduct(req, res));

export default userRouter;