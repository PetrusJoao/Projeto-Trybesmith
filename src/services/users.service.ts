import { UserInterface } from '../interfaces';
import UserModel from '../models/users.model';

export default class ProductsService {
  userModel = new UserModel();

  async createUser(user: UserInterface): Promise<UserInterface> {
    const newUser = await this.userModel.createNewUser(user);
    return newUser;
  }

  // async getAllProducts(): Promise<UserInterface[]> {
  //   const products = await this.userModel.getAllProducts();
  //   return products;
  // }
}