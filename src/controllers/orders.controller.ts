import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  ordersService = new OrdersService();

  async getAllOrders(_req: Request, res: Response) {
    const orders = await this.ordersService.getAllOrders();
    res.status(200).json(orders);
  }

  //   createOrder = async (req: Request, res: Response) => {
  //     const order = req.body;
  // 
  //     const orderCreated = await this.ordersService.createProduct(order);
  //     res.status(201).json(orderCreated);
  //   };
}