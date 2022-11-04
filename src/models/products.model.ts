import { ResultSetHeader, RowDataPacket } from 'mysql2';
import mysql from './connection';

import { ProductsInterface } from '../interfaces';

export default class ProductModel {
  connection = mysql;

  async createNewProduct(product: ProductsInterface): Promise<ProductsInterface> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(`INSERT INTO
       Trybesmith.Products (name, amount) VALUES (?, ?)`, [name, amount]);
    return { id: insertId, name, amount };
  }

  async getAllProducts(): Promise<ProductsInterface[]> {
    const [products] = await this.connection
      .execute<ProductsInterface[] & RowDataPacket[]>('SELECT * FROM Trybesmith.Products');
    
    return products;
  }
}