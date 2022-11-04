import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const userRouter = Router();

const productsController = new ProductsController();

userRouter.post('/', (req, res) => productsController.createProduct(req, res));
userRouter.get('/', (req, res) => productsController.getAllProducts(req, res));

export default userRouter;