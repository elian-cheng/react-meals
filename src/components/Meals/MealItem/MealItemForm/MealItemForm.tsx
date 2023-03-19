import React, { useRef, useState } from "react";
import Input from "../../../UI/Input/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props: { id: string; onAddToCart: Function }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredAmount = amountInputRef?.current?.value || "";
    const enteredAmountNumber = +enteredAmount;

    if (!enteredAmount.trim().length || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form
      className={classes.form}
      onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1"
        }}
      />
      <button>Add</button>
      {!amountIsValid && <p>Please add a valid amount (1-5).</p>}
    </form>
  );
};
export default MealItemForm;
