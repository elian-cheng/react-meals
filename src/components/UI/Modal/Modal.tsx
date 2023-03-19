import { Fragment, MouseEventHandler, ReactNode } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

export const Backdrop = (props: { onClose: MouseEventHandler<HTMLElement> }) => {
  return (
    <div
      className={classes.backdrop}
      onClick={props.onClose}
    />
  );
};

export const ModalOverlay = (props: { children: ReactNode }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays") as HTMLElement;

const Modal = (props: { children: ReactNode; onClose: MouseEventHandler<HTMLElement> }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};
export default Modal;
