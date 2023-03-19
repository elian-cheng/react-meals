import React, { InputHTMLAttributes } from "react";
import classes from "./Input.module.css";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  defaultValue: string;
}

interface IInputProps {
  label: string;
  input: IInput;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        ref={ref}
        {...props.input}
      />
    </div>
  );
});
export default Input;
