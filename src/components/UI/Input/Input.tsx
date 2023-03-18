import { FC, InputHTMLAttributes } from "react";
import classes from "./Input.module.css";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  defaultValue: string;
}

interface IInputProps {
  label: string;
  input: IInput;
}

const Input: FC<IInputProps> = ({ label, input }) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};
export default Input;
