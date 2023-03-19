import { MouseEventHandler, useContext } from "react";
import CartContext from "../../../../store/CartContext";
import CartIcon from "../../../Cart/CartIcon/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props: { onClick: MouseEventHandler<HTMLButtonElement> }) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <button
      className={classes.button}
      onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
