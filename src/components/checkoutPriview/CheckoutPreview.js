import React from "react";
import Button from "../UI/Button/Button";

const CheckoutPreview = (props) => {
  const propArray = Object.keys(props.propsObj).map((elem, index) => {
    return (
      <li key={elem}>
        {elem} → {props.propsObj[elem]}
      </li>
    );
  });

  console.log(props.totalPrice);
  return (
    <React.Fragment>
      {propArray}
      <p><strong>Final PRICE → {props.totalPrice}</strong></p>
      <Button btnType="Success" Click={()=>alert("hello")}>Proceed</Button>
      <Button btnType="Danger" Click={props.disableCheckout}>Go Back</Button>
    </React.Fragment>
  );
};

export default CheckoutPreview;
