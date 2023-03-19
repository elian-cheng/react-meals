import { MouseEventHandler, useContext, useEffect, useState } from "react";
import CartContext from "../../../../store/CartContext";
import CartIcon from "../../../Cart/CartIcon/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props: { onClick: MouseEventHandler<HTMLButtonElement> }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`;

  useEffect(() => {
    if (!cartCtx.items.length) return;
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button
      className={btnClasses}
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
