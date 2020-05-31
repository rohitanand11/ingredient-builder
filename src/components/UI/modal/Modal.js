import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "../backdrop/Backdrop";

const Modal = (props) => {
    console.log(props);
  let BackdropShow = props.show ? <Backdrop Click = {props.disableBackdrop}/> : null;
  return (
    <React.Fragment>
      {BackdropShow}
      <ul
        className={classes.Modal}
        style={{ transform: props.show ? "translate(0)" : "translate(-200vh)" }}
      >
        {props.children}
      </ul>
    </React.Fragment>
  );
};

export default Modal;
