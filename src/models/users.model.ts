import { ResultSetHeader } from 'mysql2';
import mysql from './connection';

import { UserInterface } from '../interfaces';

export default class ProductModel {
  connection = mysql;

  async createNewUser(user: UserInterface): Promise<UserInterface> {
    const { username, classe, level, password } = user;
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(`INSERT INTO
       Trybesmith.Users (username, classe, level, password)
       VALUES (?, ?, ?, ?)`, [username, classe, level, password]);
    return { id: insertId, username, classe, level, password };
  }

  // async getAllProducts(): Promise<UserInterface[]> {
  //   const [products] = await this.connection
  //     .execute<UserInterface[] & RowDataPacket[]>('SELECT * FROM Trybesmith.Products');
  //   
  //   return products;
  // }
}