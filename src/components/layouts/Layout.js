import React from "react";
import classes from "./Layout.module.css";
import Toolbar from "../toolbar/Toolbar";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Toolbar/>
      
      <main className={classes.content}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
