import React from "react";
import Logo from "../logo/Logo";
import NavigationItems from "../navigation/NavigationItems";
import classes from "./Toolbar.module.css";

const Toolbar = () => {
  return (
    <div className={classes.Toolbar}>
      <div>menu</div>
      <div className={classes.logo}>
        <Logo />
      </div>
      <NavigationItems />
    </div>
  );
};

export default Toolbar;
