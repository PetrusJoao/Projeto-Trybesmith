import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const productRouter = Router();

const productsController = new ProductsController();

productRouter.post('/', (req, res) => productsController.createProduct(req, res));
// productRouter.get('/', (req, res) => productsController.getAllProducts(req, res));

export default productRouter;