import React from 'react';
import NavigationItem from "./NavigationItem/NavigationItem";
import Classes from "./NavigationItems.module.css";

const NavigationItems = () => {
    return (
        <ul className={Classes.NavigationItems}>
            <NavigationItem link="/" active={true}>burger page</NavigationItem>
            <NavigationItem link="/">about page</NavigationItem>
            <NavigationItem link="/">contact us page</NavigationItem>
        </ul>
    );
};

export default NavigationItems;