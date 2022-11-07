import { OrdersInterface } from '../interfaces';
import OrderModel from '../models/orders.model';

export default class OrdersService {
  orderModel = new OrderModel();

  async getAllOrders(): Promise<OrdersInterface[]> {
    const orders = await this.orderModel.getAllOrders();
    return orders;
  }
  
  // async createUser(order: OrdersInterface): Promise<OrdersInterface> {
  //   const newOrder = await this.orderModel.createNewUser(order);
  //   return newOrder;
  // }
}