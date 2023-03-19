import React from "react";

export interface IProduct {
  id: string;
  name: string;
  amount: number;
  price: number;
}

const CartContext = React.createContext({
  items: [] as IProduct[],
  totalAmount: 0,
  addItem: (item: IProduct) => {},
  removeItem: (id: string) => {}
});

export default CartContext;
