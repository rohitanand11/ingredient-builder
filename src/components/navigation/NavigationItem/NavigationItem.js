import React from 'react';
import Classes from "./NavigationItem.module.css";
import classes from './NavigationItem.module.css';

const NavigationItem = (props) => {
    return (
        <li className={Classes.NavigationItem}>
            <a href={props.link} className={props.active? classes.active:null}>{props.children}</a>
        </li>
    );
};

export default NavigationItem;