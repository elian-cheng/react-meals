import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img
          src={mealsImage}
          alt="meals table"
        />
      </div>
    </Fragment>
  );
};
export default Header;