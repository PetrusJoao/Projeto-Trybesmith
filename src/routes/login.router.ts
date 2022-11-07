import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import loginValidation from '../middlewares/login.validation';

const loginRouter = Router();

const loginController = new LoginController();

loginRouter.post('/', loginValidation, (req, res) => loginController.loginRequest(req, res));
// ordersRouter.get('/', (req, res) => ordersController.getAllOrders(req, res));

export default loginRouter;