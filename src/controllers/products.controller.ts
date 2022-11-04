import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  productsService = new ProductsService();

  createProduct = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.productsService.createProduct(product);
    res.status(201).json(productCreated);
  };
}