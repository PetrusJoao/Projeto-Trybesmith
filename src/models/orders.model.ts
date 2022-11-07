import { RowDataPacket } from 'mysql2';
import mysql from './connection';

import { OrdersInterface } from '../interfaces';

export default class OrderModel {
  connection = mysql;

  async getAllOrders(): Promise<OrdersInterface[]> {
    const [orders] = await this.connection
      .execute<(OrdersInterface & RowDataPacket)[]>(
      `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) 
      AS productsIds FROM Trybesmith.Orders as o
      INNER JOIN Trybesmith.Products as p
      ON o.id = p.orderId
      GROUP BY o.id`);

    // async createNewUser(user: UserInterface): Promise<UserInterface> {
    //   const { username, classe, level, password } = user;
    //   const [{ insertId }] = await this.connection
    //     .execute<ResultSetHeader>(`INSERT INTO
    //      Trybesmith.Users (username, classe, level, password)
    //      VALUES (?, ?, ?, ?)`, [username, classe, level, password]);
    //   return { id: insertId, username, classe, level, password };
    // }

    //   SELECT o_id, JSON_ARRAYAGG(attribute) AS attributes
    // -> FROM t3 GROUP BY o_id;
    
    return orders;
  }
}