import React from 'react';
import classes from './Logo.module.css';
import LogoImg from '../../assets/images/logo.png';

const Logo = () => {
    return(
        <div className={classes.Logo}>
            <img src={LogoImg} alt="burger logo"></img>
        </div>
    );    
};

export default Logo;