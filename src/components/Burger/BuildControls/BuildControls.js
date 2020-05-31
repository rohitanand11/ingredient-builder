import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        <strong>Total Price = ₹ {props.totalPrice}</strong>
      </p>
      {controls.map((el, i) => (
        <BuildControl
          key={el.label}
          label={el.label}
          type={el.type}
          remove={() => props.remove(el.type)}
          added={() => props.added(el.type)}
          disableCheckForLess={props.disableinfoObjectForLess[el.type]}
          disableCheckForMore={props.disableinfoObjectForMore[el.type]}
        />
      ))}

      <button className={classes.OrderButton} disabled={props.disabledOrderButtonCheck} onClick = {props.enableCheckoutModal}>ORDER NOW</button>
    </div>
  );
};

export default BuildControls;
