import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    
    let classString = [classes.Button];

    if(props.btnType==="Success"){

        classString.push(classes.Success);
        classString.join(' ');
        //console.log(classString);
    } else if (props.btnType==="Danger"){
        classString.push(classes.Danger);
        classString.join(' ');
    }
    console.log(classString);

    return (
        <button className ={classString} onClick={props.Click}>
            {props.children}
        </button>
    );
};

export default Button;