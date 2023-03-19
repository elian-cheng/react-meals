import { ReactNode, Reducer, useReducer } from "react";
import CartContext, { IProduct } from "./CartContext";

export interface ICartState {
  items: IProduct[];
  totalAmount: number;
}

export type ICartAction = IAddCartAction | IRemoveCartAction;

interface IAddCartAction {
  type: "ADD";
  item: IProduct;
}
interface IRemoveCartAction {
  type: "REMOVE";
  id: string;
}

const defaultCartState = {
  items: [] as IProduct[],
  totalAmount: 0
};

const cartReducer: Reducer<ICartState, ICartAction> = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  return defaultCartState;
};

const CartProvider = (props: { children: ReactNode }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item: IProduct) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
