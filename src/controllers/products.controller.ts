import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  productsService = new ProductsService();

  createProduct = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.productsService.createProduct(product);
    res.status(201).json(productCreated);
  };

  async getAllProducts(req: Request, res: Response) {
    const users = await this.productsService.getAllProducts();
    res.status(200).json(users);
  }
}