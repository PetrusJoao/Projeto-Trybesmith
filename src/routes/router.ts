import { Router } from 'express';
import productsRouter from './products.router';

// import authMiddleware from "../middlewares/auth.middleware";

const router = Router();

router.use('/products', productsRouter);

export default router;