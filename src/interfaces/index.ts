export interface UserInterface {
  id: number,
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface OrdersInterface {
  id: number,
  userId: number,
}

export interface ProductsInterface {
  id: number,
  name: string,
  amount: number,
}