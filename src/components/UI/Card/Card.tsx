import React from "react";
import classes from "./Card.module.css";

const Card = (props: { children: React.ReactNode }) => {
  return <div className={classes.card}>{props.children}</div>;
};
export default Card;
