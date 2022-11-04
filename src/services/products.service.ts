import { ProductsInterface } from '../interfaces';
import ProductModel from '../models/products.model';

export default class ProductsService {
  productModel = new ProductModel();

  async createProduct(product: ProductsInterface): Promise<ProductsInterface> {
    const newProduct = await this.productModel.createNewProduct(product);
    return newProduct;
  }

  async getAllProducts(): Promise<ProductsInterface[]> {
    const products = await this.productModel.getAllProducts();
    return products;
  }
}