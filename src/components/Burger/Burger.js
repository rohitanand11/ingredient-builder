import React from "react";
import BurgerIngridient from "./BurgerIngridient/BurgerIngridient";
import classes from "./Burger.module.css";

const Burger = (props) => {
  let transformed_ingredients = Object.keys(props.ingridients)
    .map((igKey) => {
      return [...Array(props.ingridients[igKey])].map((_, i) => {
        return <BurgerIngridient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

    if(transformed_ingredients.length===0){
        transformed_ingredients = <p>add some ingridient</p>
    }
  return (
    <div className={classes.Burger}>
      <BurgerIngridient type="bread-top" />
      {transformed_ingredients}
      <BurgerIngridient type="bread-bottom" />
    </div>
  );
};

export default Burger;
